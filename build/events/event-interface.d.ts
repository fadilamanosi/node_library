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
interface schoolCreatedInterface {
    subject: subjects.schoolCreated;
    data: {
        school_id: string;
        school_name: string;
        school_slug: string;
    };
}
export { coreInterface, templateInterface, schoolCreatedInterface };
