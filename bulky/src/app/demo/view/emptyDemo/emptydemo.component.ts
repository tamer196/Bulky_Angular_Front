import {Component} from '@angular/core';
import {AppBreadcrumbService} from '../../../appBreadcrumb/app.breadcrumb.service';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pages'},
            {label: 'Empty Page'}
        ]);
    }
}
