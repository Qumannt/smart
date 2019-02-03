import { Component, ViewEncapsulation, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-getall',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent   {

  lat: number = 26.765844;
 lng: number = 83.364944;




  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  ranges1(start: number, end: number): number[] {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    }
switchValue = false;
switchValue1 = false;
switchValue2 = false;
switchValue3 = false;
switchValue4 = false;


   // modal
  tplModal: NzModalRef;
 tplModalButtonLoading = false;
 htmlModalVisible = false;

  isCollapsed = false;
  dateFormat = 'yyyy/MM/dd';
selectedValue;
inputValue: string;
  filteredOptions = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  constructor(private modalService: NzModalService) { this.filteredOptions = this.options; }


  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
      this.tplModal = this.modalService.create({
        nzTitle: tplTitle,
        nzContent: tplContent,
        nzFooter: tplFooter,
        nzMaskClosable: false,
        nzClosable: true,
        nzOnOk: () => console.log('Click ok')
      });
    }


  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    window.setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }



    onInput(value: string): void {
    this.filteredOptions = this.options
    .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);


}







}
