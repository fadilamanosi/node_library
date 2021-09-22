import { subjects } from './subjects';
interface coreInterface {
    subject: subjects.core;
    data: {
        id: string;
        pageType: string;
        themeActivated: string;
    };
}
interface templateInitInterface {
    subject: subjects.templateInit;
    data: {};
}
interface schoolCreatedInterface {
    subject: subjects.schoolCreated;
    data: {
        school_id: string;
        school_name: string;
        school_slug: string;
    };
}
export { coreInterface, templateInitInterface, schoolCreatedInterface };
