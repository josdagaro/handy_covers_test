import { loadNgModule, ngModule } from '../bootstrap/ngModule';
import { dashboardComponent } from './dashboard.component';
import { homeComponent } from './home.component';
/*import {loginComponent} from './login.component';*/
import { dashboardState, homeState/*, loginState*/ } from './dashboard.state';

import {
    defaultConfigurationBlock,
    locationConfigurationBlock,
    trackingRunBlock
} from './dashboard.configuration';

const mainModule = {
    components: { dashboardComponent, homeComponent/*, loginComponent*/ },
    states: [ dashboardState, homeState/*, loginState*/ ],
    configBlocks: [ defaultConfigurationBlock, locationConfigurationBlock ],
    runBlocks: [ trackingRunBlock ]
};

loadNgModule(ngModule, mainModule);
