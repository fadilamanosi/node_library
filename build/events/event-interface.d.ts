import { subjects } from './subjects';
interface coreInterface {
    subject: subjects.core;
    data: {
        id: string;
        pageType: string;
        themeActivated: string;
    };
}
interface templateInterface {
    subject: subjects.template;
    data: {
        id: string;
        pageType: string;
        themeActivated: string;
    };
}
export { coreInterface, templateInterface };
