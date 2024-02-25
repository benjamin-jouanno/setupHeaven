import { Component, OnInit } from '@angular/core';
import { ShotService } from '../../services/shot.service';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IShot } from '../../types/shot.type';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-shot-creator',
  templateUrl: './shot-creator.component.html',
  styleUrl: './shot-creator.component.css'
})
export class ShotCreatorComponent implements OnInit{
  username : string | undefined;
  shotForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private shotService: ShotService , private authenticationService: AuthenticationService, private dialogRef: DialogRef) {}

  ngOnInit(): void {
        this.authenticationService.getMeUser().subscribe(res => {this.username = res.username});
  }

  submit() {
    console.log('hello');
    const formValues = this.shotForm.getRawValue();
    if (formValues.title && formValues.subtitle && formValues.description && this.username) {
      let shot: IShot = {
        username: this.username ? this.username : '',
        title: formValues.title,
        subtitle: formValues.subtitle,
        description: formValues.description,
        id: '',
        themes: [],
        setupObjects: [],
        shotPictures: []
      };
      this.shotService.createShot(shot).subscribe(res => {
        this.dialogRef.close();
      })
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
