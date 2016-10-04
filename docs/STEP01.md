# DevdaysChat

## STEP 01

### créer chat component
- cd src/app
- ng g component chat
- class
    - init constructor : s1-chat
- template
    - init template : s1-chat
    - init css : s1-container

### router
- add route dans app.routes : s1-route
- add routerLink dans rooms.component.html : [routerLink]="['/rooms', room.$key, 'chat']"
