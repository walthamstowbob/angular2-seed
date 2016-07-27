System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SummaryPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SummaryPipe = (function () {
                function SummaryPipe() {
                }
                SummaryPipe.prototype.transform = function (value, args) {
                    var limit = (args && args[0]) ? parseInt(args[0]) : 50;
                    if (value)
                        return value.substring(0, limit) + " ...";
                };
                SummaryPipe = __decorate([
                    core_1.Pipe({ name: 'summary' }), 
                    __metadata('design:paramtypes', [])
                ], SummaryPipe);
                return SummaryPipe;
            }());
            exports_1("SummaryPipe", SummaryPipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VtbWFyeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFORywrQkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLElBQWM7b0JBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBRXZELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDTixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUNsRCxDQUFDO2dCQVBMO29CQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7K0JBQUE7Z0JBUTFCLGtCQUFDO1lBQUQsQ0FBQyxBQVBELElBT0M7WUFQRCxxQ0FPQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3N1bW1hcnknIH0pXHJcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5UGlwZSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gKSB7XHJcbiAgICAgICAgdmFyIGxpbWl0ID0gKGFyZ3MgJiYgYXJnc1swXSkgPyBwYXJzZUludChhcmdzWzBdKSA6IDUwO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGltaXQpICsgXCIgLi4uXCI7XHJcbiAgICB9XHJcbn0iXX0=