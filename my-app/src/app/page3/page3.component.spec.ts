import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3Component } from './page3.component';

describe('Page3Component', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
{
  current = 0;

index = 'First-content';

pre(): void {
  this.current -= 1;
  this.changeContent();
}

next(): void {
  this.current += 1;
  this.changeContent();
}

done(): void {
  console.log('done');
}

changeContent(): void {
  switch (this.current) {
    case 0: {
      this.index = 'First-content';
      break;
    }
    case 1: {
      this.index = 'Second-content';
      break;
    }
    case 2: {
      this.index = 'third-content';
      break;
    }
    default: {
      this.index = 'error';
    }
  }
}
