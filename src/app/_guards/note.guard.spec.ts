import { TestBed, async, inject } from '@angular/core/testing';

import { NoteGuard } from './note.guard';

describe('NoteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteGuard]
    });
  });

  it('should ...', inject([NoteGuard], (guard: NoteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
