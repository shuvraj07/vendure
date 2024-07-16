import { SharedModule } from '@vendure/admin-ui/core';
import { Component } from '@angular/core';

@Component({
    selector: 'greeter',
    template: `
        <vdr-page-block>
            <h2>{{ greeting }}</h2>
        </vdr-page-block>
    `,
    standalone: true,
    imports: [SharedModule],
})
export class TemplateDetailComponent {
    greeting = 'Hello world from the component!';
}
