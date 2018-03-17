(function($) {
    "use strict";
    function is_jQuery(){
        return $
    }

    var __COUNTRY_Data = {};

    // Object Instance
    __COUNTRY_Data = function(el, options) {
        var COUNTRY_CORE =  el;

        var TOOLS = {
            listHtml : function(vars, data){
                if ( vars.showFlag ) {
                    return "<li data-data='"+JSON.stringify(data)+"' data-id='"+data.id+"' data-iso='"+data.iso+"' data-name='"+data.name+"' data-iso_2='"+data.data.iso_2+"' data-iso_3='"+data.data.iso_3+"' data-phone='+"+data.data.phone+"' data-currency='"+data.data.currency+"' data-ttl='"+data.data.ttl+"' data-capital='"+data.data.capital+"'><span class='"+vars.namespace+"-flag-wrap'><span class='flag-"+(data.iso).toLowerCase()+"'></span></span>"+data.name+"</li>";
                }else{
                    return "<li data-data='"+JSON.stringify(data)+"' data-id='"+data.id+"' data-iso='"+data.iso+"' data-name='"+data.name+"' data-iso_2='"+data.data.iso_2+"' data-iso_3='"+data.data.iso_3+"' data-phone='+"+data.data.phone+"' data-currency='"+data.data.currency+"' data-ttl='"+data.data.ttl+"' data-capital='"+data.data.capital+"'>"+data.name+"</li>";
                }
            },
            filterData : function(data, key){
                return data.filter(function(data, index){
                    // return data.name.indexOf(key) > -1;
                    return (new RegExp(key)).test(data.name) || (new RegExp(key)).test(data.id) || (new RegExp(key)).test(data.iso)
                });
            },
            findData : function(data, key){
                return data.find(function(data, index){
                    // return data.name == key;
                    return (new RegExp(key)).test(data.name) || (new RegExp(key)).test(data.id) || (new RegExp(key)).test(data.phone_code)
                });
            },
            CreateLabel : function(elem, vars){
                elem.parent().append('<span class="'+vars.namespace+'-label">'+vars.placeholder+'</span>');
            },
            extend : function(a, b){
                for(var i=1; i<arguments.length; i++)
                    for(var key in arguments[i])
                        if(arguments[i].hasOwnProperty(key))
                            arguments[0][key] = arguments[i][key];
                return arguments[0];
            },
            wrap : function (toWrap, wrapper) {
                wrapper = wrapper || document.createElement('div');
                toWrap.parentNode.appendChild(wrapper);
                wrapper.appendChild(toWrap);
            },
            getData : function (data, iso) {
                var iso = iso.toUpperCase();
                for(var i in data){
                    if ( data[i]["iso"] == iso) {
                        return data[i]
                    }
                }
            }

        }

        COUNTRY_CORE.Initialize = function() {

            this.hasClick = 0;
            this.tabIndex = -1;

            this.vars = TOOLS.extend({}, __COUNTRY_Data.defaults, options);

            this.CreateIso();
            this.CreateCountryList();
            this.AppendCountryList();
            this.KeyupAction();

            if ( this.vars.defaultCountry) {
                var data = TOOLS.getData(this.vars.dataCountries, this.vars.defaultCountry);
                var _data = {};
                var _dataset = {};

                for( var i in data){
                    if ( i == 'data') {
                        _dataset[i] = JSON.stringify(data[i]);
                    }else{
                        _dataset[i] = data[i];
                    }
                }
                for( var i in data.data){
                    if ( i == "phone") {
                        _dataset[i] = "+" + data.data[i];
                    }else{
                        _dataset[i] = data.data[i];
                    }
                }
                _data.dataset = _dataset;
                this.SetVal(_data);
            }

            if ( typeof this.vars.run == "function") {
                this.vars.run(this);
            }

        }

        //CountryData: Create Wraper
        COUNTRY_CORE.CreateIso = function() {
            var vars = this.vars;

            this.classList
                .add(vars.namespace+"-input");

            this.setAttribute('placeholder',vars.placeholder);

            this.parent_container = document.createElement('div');
            this.parent_container.setAttribute('class', vars.namespace+'-container');

            this.parent_root = document.createElement('div');
            this.parent_root.setAttribute('class', vars.namespace+' '+vars.namespace+'-run');

            this.input_wrap = document.createElement('div');
            this.input_wrap.setAttribute('class', vars.namespace+'-input-wrap');

            this.input_label = document.createElement('span');
            this.input_label.setAttribute('class', vars.namespace+'-label');
            this.input_label.innerHTML = vars.placeholder;

            TOOLS.wrap(this, this.parent_root);
            TOOLS.wrap(this, this.parent_container);
            TOOLS.wrap(this, this.input_wrap);

            this.__ISO = this.parentElement.parentElement.parentElement;
            this.__root = this.parentElement.parentElement
            this.__input_wrap = this.parentElement;

            this.__input_wrap.appendChild(this.input_label);

            if ( this.vars.print ) {
                this.CreateInputList();
            }

        }

        COUNTRY_CORE.CreateInputList = function(){
            var vars = this.vars;
            var _this = this;

            this.list_input = [];
            this.list_input_wrap = [];
            this.list_input_label = [];
            this.list_label_value = [];

            for( var i in vars.printInput){
                var type = vars.printInput[i].type;

                this.list_input[type] = document.createElement('input');

                this.list_input[type].setAttribute('placeholder', vars.printInput[i].placeholder);
                this.list_input[type].setAttribute('name', type+'-country');
                this.list_input[type].setAttribute('type', 'text');
                this.list_input[type].setAttribute('class', vars.namespace+'-input');

                this.list_input_wrap[type] = this.input_wrap.cloneNode();

                this.list_input_label[type] = this.input_label.cloneNode();
                this.list_input_label[type].innerHTML = 'Enter '+vars.printInput[i].placeholder;

                this.list_label_value[type] = document.createElement('span');
                this.list_label_value[type].setAttribute('class', vars.namespace+'-label-value')


                this.__root.appendChild(this.list_input_wrap[type]);
                this.list_input_wrap[type].appendChild(this.list_input[type]);
                this.list_input_wrap[type].appendChild(this.list_input_label[type]);
                this.list_input_wrap[type].appendChild(this.list_label_value[type]);

            }
        }

        //CountryData: Create Wraper
        COUNTRY_CORE.CreateCountryList = function() {

            this.countryListWrap = document.createElement('div');
            this.countryListWrap.setAttribute('class', this.vars.namespace+'-country-list-wrap');
            this.countryListWrap.setAttribute('style', 'margin-top: -1px;display:none;');

            this.countryList = document.createElement('ul');
            this.countryList.setAttribute('class', this.vars.namespace+'-country-list');

            this.__input_wrap.appendChild(this.countryListWrap);
            this.countryListWrap.appendChild(this.countryList);

            this.OpenList();

        }

        COUNTRY_CORE.AppendCountryList = function(){
            var _this = this;
            var data_list = '';

            for( var i in _this.vars.dataCountries){
                data_list+= TOOLS.listHtml(_this.vars, _this.vars.dataCountries[i]);
            }

            this.countryList.innerHTML = data_list;
            this.countryListChildren = this.countryList.children;

            this.ClickAction();

        }

        COUNTRY_CORE.OpenList = function(){
            var _this = this;
            var vars = this.vars;
            this.addEventListener("focusin", function(){
                _this.countryListWrap.style.display = 'block';


            });
            document.getElementsByTagName('body')[0].addEventListener("click", function(e){
                var re = vars.namespace+'(-input-wrap|-country-list)';
                var pattern = new RegExp(re);
                if ( !(pattern).test(e.target.parentNode.className)){
                    _this.countryListWrap.style.display = 'none';
                }
            });

        }

        COUNTRY_CORE.KeyupAction = function(type){
            var _this = this;

            this.addEventListener('keyup', function(e){
                var _input = this;

                if ( _input.value.length > 0) {
                    _this.countryListWrap.style.display = 'block';
                }else{
                    _this.countryListWrap.style.display = 'none';
                }

                if ( e.keyCode != 40 && e.keyCode != 38) {

                    var _val = this.value;
                    var _countryData = "";
                    var _result = TOOLS.filterData(_this.vars.dataCountries, _val);

                    _this.TotalData = _result.length;

                    if ( _result ) {

                        for ( var i in _result){
                            _countryData+= TOOLS.listHtml(_this.vars, _result[i]);
                        }

                        _this.countryList.innerHTML = _countryData;
                    }

                    if ( typeof _this.vars.keyup == "function") {
                        _this.vars.keyup(_this, _val);
                    }
                }

                _this.UseKey(e)

            });

        }

        COUNTRY_CORE.SetVal = function(elem){
            var _this = this;
            var value = elem.dataset;

            if ( this.vars.print) {

                for( var i in _this.vars.printInput ){
                    if ( _this.vars.printInput[i].type == "phone" || _this.vars.printInput[i].type == "currency") {
                        _this.list_input_wrap[_this.vars.printInput[i].type].classList.add(_this.vars.namespace+'-have-value');
                        _this.list_label_value[_this.vars.printInput[i].type].innerHTML = value[_this.vars.printInput[i].type];

                    }else{
                        _this.list_input[_this.vars.printInput[i].type].value = value[_this.vars.printInput[i].type];
                    }
                }

            }

            _this.value = value.name;
        }

        COUNTRY_CORE.ClickAction = function(type){
            var _this = this;
            var vars = this.vars;

            this.countryList.addEventListener('click', function(e){
                var target = e.target;
                if ( e.target.nodeName == "LI") {
                    target = e.target
                }else if(e.target.className == vars.namespace + "-flag-wrap"){
                    target = e.target.parentElement
                }else{
                    target = e.target.parentElement.parentElement
                }
                _this.SetVal(target);

                if ( typeof _this.vars.selected == "function") {
                    _this.vars.selected(_this, target.dataset, JSON.parse(target.dataset.data));
                }

                _this.countryListWrap.style.display = 'none';

            })
        }

        COUNTRY_CORE.UseKey = function(event){
            var _this = this;
            var vars = this.vars;

            if ( event.keyCode == 40) {
                _this.tabIndex ++;

                if ( _this.tabIndex > (_this.TotalData - 1) ) {
                    _this.countryList.children[(_this.TotalData - 1)].classList = "";
                    _this.tabIndex = 0;
                }

                _this.countryList.children[_this.tabIndex].classList.add(vars.namespace+'-selected');

                if ( _this.tabIndex >= 1 ) {
                    _this.countryList.children[(_this.tabIndex-1)].classList = "";
                }

                if ( _this.tabIndex >= 2 ) {
                    _this.countryListWrap.scrollTop = (_this.countryList.children[_this.tabIndex].offsetTop - (_this.countryList.children[_this.tabIndex].offsetHeight * 2))
                }

                _this.SetVal(_this.countryList.children[_this.tabIndex]);


            }else if (event.keyCode == 38 ){
                _this.tabIndex --;
                if ( _this.tabIndex < 0) {
                    _this.tabIndex = 0;
                }

                    _this.countryList.children[_this.tabIndex].classList.add(vars.namespace+'-selected');
                    if ( _this.tabIndex >= 0 ) {
                        _this.countryList.children[(_this.tabIndex+1)].classList = "";
                    }
                    if ( _this.tabIndex >= 2 ) {
                        _this.countryListWrap.scrollTop = (_this.countryList.children[_this.tabIndex].offsetTop - (_this.countryList.children[_this.tabIndex].offsetHeight * 2))
                    }
                    _this.SetVal(_this.countryList.children[_this.tabIndex]);

            }

            if ( event.keyCode == 13) {
                _this.countryListWrap.style.display = 'none';
                _this.tabIndex = -1;
            }
            
        }
        //CountryData: Initialize
        COUNTRY_CORE.Initialize();
    }
    //CountryData: Default Settings
    __COUNTRY_Data.defaults = {
        dataCountries: [], // Array Object Data
        namespace: "__COUNTRY",
        placeholder: 'Type a Country',
        showFlag: false,
        defaultCountry: "us",
        print: true,
        printInput : [{
            type: 'phone',
            placeholder : "Phone Number"
        }, {
            type: 'currency',
            placeholder : "Currency"
        }, {
            type: 'iso_2',
            placeholder : "Country Iso"
        }],
        run: function() {}, //Callback:
        selected: function() {}, //Callback:
        keyup: function() {} //Callback:
    }
    //CountryData: For jQuery
    if ( is_jQuery() ) {
        $.fn.COUNTRY_Data = function(options) {
            return this.each(function() {
                new __COUNTRY_Data(this, options);
            });
        }
    }
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = __COUNTRY_Data;
    } else {
        window.__COUNTRY_Data = __COUNTRY_Data;
    }
})( (typeof window.jQuery) == "function" ? window.jQuery : false);