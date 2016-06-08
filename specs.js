/// <reference path="typings/jasmine/jasmine.d.ts" />
'use strict';

describe('javaScript', function () {

    it('scope', function () {
        var itemA = 1;

        function f1(){
            expect(itemA === undefined).toBeTruthy();
            var itemA = 2;
            expect(itemA === 2).toBeTruthy();
        };

        function f2(itemA){
            expect(itemA === undefined).toBeTruthy();
            itemA = 3;
            itemB = 4;  

            var itemC = 5;
        };

        f1();
        expect(itemA === 1).toBeTruthy();
        f2();
        expect(itemB === 4).toBeTruthy();
        expect(itemA === 1).toBeTruthy();
        //expect(itemC === ).toBeTruthy();
        var itemB;
    });


    it('named function expression', function  (){
        var functionExpression = function functionHiddenDeclaration (param1){
            function innerFunction (){
                if (param1 === 2){
                    return functionHiddenDeclaration(param1 - 1);
                }else if (param1 === 1){
                    return 1;
                }else{
                    return param1;
                }
            }
            return innerFunction();
        }
        expect(functionExpression(2) === 1).toBeTruthy();
        //expect(functionHiddenDeclaration(2) === 1).toBeTruthy();
        expect(functionExpression(0) === 0).toBeTruthy();
        //expect(functionHiddenDeclaration(0) === 0).toBeTruthy();
    });


    it('IIFE', function() {
        var itemA = 1;
        var itemB = 1;
        (function f1(param1){
            expect(itemA === 1).toBeTruthy();
            expect(itemB === undefined).toBeTruthy();
            itemA = param1;
            var itemB;
            itemB = 2;
            var itemC = 1;
        })(2);
        expect(itemA === 2).toBeTruthy();
        expect(itemB === 1).toBeTruthy();
        //expect(itemC === undefined).toBeTruthy();
        //expect(f1() === undefined).toBeTruthy();
    });


    it('let', function() {
        //expect(itemA === undefined).toBeTruthy();
        expect(itemB === undefined).toBeTruthy();
        if (true){
            //expect(itemA === undefined).toBeTruthy();
            expect(itemB === undefined).toBeTruthy();
            let itemA = 1;
            var itemB = 1;
            expect(itemA === 1).toBeTruthy();
            expect(itemB === 1).toBeTruthy();
        };
        //expect(itemA === undefined).toBeTruthy();
        expect(itemB === 1).toBeTruthy();
    });

    it('hoisting', function  (){
        var itemA = f1();
        var itemB = itemC;
        expect(itemA === 1).toBeTruthy();
        expect(itemB === undefined).toBeTruthy();
        function f1 (){
            return 1;
        };
        var itemC = function  (){
            return f1();
        };
    });


    it('this - implicit binding', function() {
        function f1 (){
            //expect(this.itemA === 1).toBeTruthy();
        }
        var itemA = 1;
        f1();

        function f2 (){
            expect(this.itemB === 2).toBeTruthy();
        };
        var itemB = 1;
        var itemC = {itemB: 2, f4: f2};
        itemC.f4();
    });


    it('call - explicit binding', function() {
        function f1 (){
            expect(this.itemA).toBe(2);
        }

        var itemA = 1;
        var itemB = {itemA: 2};
        f1.call(itemB);
    });

    
    it('call - explicit binding - hard binding example', function() {
        function f1 (){
            expect(this.itemA === 1).toBeTruthy();
        }

        var obj1 = {itemA: 1};
        var obj2 = {itemA: 2};

        var f2 = f1;
        f1 = function(){
            f2.call(obj1);
        }

        f1.call(obj2);
    });

    it('call - explicit binding - dedicated bind function', function() {
        function bind (fn, obj){
            return function(){
                fn.call(obj);
            }
        }
        function f1 (){
            expect(this.itemA === 1).toBeTruthy();
        }

        var obj1 = {itemA: 1};
        var obj2 = {itemA: 2};

        f1 = bind(f1, obj1);

        f1.call(obj2);
    });    

    
    it('bind function from ES5', function() {
        function f1 (){
            expect(this.itemA === 1).toBeTruthy();
        }

        var obj1 = {itemA: 1};
        var obj2 = {itemA: 2};

        f1 = f1.bind(obj1);

        f1.call(obj2);
    });
        
    it('this - new binding', function() {
        function f1 (){
            var itemA = 1;
            expect(this.itemA === undefined).toBeTruthy();
        }
        var obj1 = new f1();

        function f2 (){
            this.itemB = 1;
            expect(this.itemB === 1).toBeTruthy();
        }
        var obj2 = new f2();
    });

    it('this - new vs hard binding', function() {
        function f1 (){
            expect(this.itemA === undefined).toBeTruthy();
        }

        var obj1 = {itemA: 1};
        var obj2 = {itemA: 2};

        f1 = f1.bind(obj1);

        var obj3 = new f1();
    });

    
    it('closure', function() {
        function f1 (){
            var itemA = 1;
            function f1Internal (){
                expect(itemA === 1).toBeTruthy();
            }
            f2(f1Internal);
        }

        function f2(f2Internal){
            f2Internal();
        } 

        f1();
    });
            

});


