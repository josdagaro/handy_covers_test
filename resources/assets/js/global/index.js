import { baseConfiguration } from '../configuration/index';
import { loadNgModule, ngModule } from "../bootstrap/ngModule";
import { ConfigurationService } from './configuration.service';
import { dialogDirective } from './dialog.directive';
import { DialogService } from './dialog.service';
import './redirectHookRunBlock';
import './service';

let configurationService = new ConfigurationService();
configurationService.development = baseConfiguration.development;
configurationService.save();

const globalModule = {
    directives: { dialogDirective },
    components: {},
    services: { ConfigurationService, DialogService },
    runBlocks: []
};

loadNgModule(ngModule, globalModule);
