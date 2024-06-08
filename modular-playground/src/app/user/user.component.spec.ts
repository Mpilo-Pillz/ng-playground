import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let app: any;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(app).toBeTruthy();
  });

  it('isLoggedIn should be false', () => {
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should use the username from the service', () => {
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the username if the user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(app.user.name);
  });

  it('should not display username if user is NOT logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')).not.toContain(app.user.name);
  });
});
