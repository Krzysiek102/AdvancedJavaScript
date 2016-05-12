/// <reference path="typings/jasmine/jasmine.d.ts" />
'use strict';

describe('javaScript', function () {

    it('scope tests', function () {
        var itemA = 1;
        
        function f1(){
            //expect(itemA === ).toBeTruthy();
            var itemA = 2;
            //expect(itemA === ).toBeTruthy();
        };
        
        function f2(itemA){
            //expect(itemA === ).toBeTruthy();
            itemA = 3;
            itemB = 4;
            
            var itemC = 5;
        };
        
        f1();
        //expect(itemA === ).toBeTruthy();
        f2();
        //expect(itemB === ).toBeTruthy();
        //expect(itemA === ).toBeTruthy();
        //expect(itemC === ).toBeTruthy();
        var itemB;
    });

});


    