/// <reference path="typings/jasmine/jasmine.d.ts" />
'use strict';

describe('javaScript', function () {

    it('scope tests', function () {
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
    })    
       
});


    