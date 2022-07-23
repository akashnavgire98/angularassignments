import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchildComponent } from './userchild.component';

describe('UserchildComponent', () => {
  let component: UserchildComponent;
  let fixture: ComponentFixture<UserchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
