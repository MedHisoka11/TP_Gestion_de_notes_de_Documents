import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsMarkdownComponent } from './docs-markdown.component';

describe('DocsMarkdownComponent', () => {
  let component: DocsMarkdownComponent;
  let fixture: ComponentFixture<DocsMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
