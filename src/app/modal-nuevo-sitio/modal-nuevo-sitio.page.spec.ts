import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalNuevoSitioPage } from './modal-nuevo-sitio.page';

describe('ModalNuevoSitioPage', () => {
  let component: ModalNuevoSitioPage;
  let fixture: ComponentFixture<ModalNuevoSitioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoSitioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNuevoSitioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
