export interface IInput {
    title: string;
    description: string;
    priority: string;
    category: string;
    status: string;
    createDate: Date;
    action: string;
}

export interface IPriorityOptions {
    text: string;
    value: string;
}

export interface ICategoryOptions {
    text: string;
    value: string;
    icon: string;
}

export interface IStatusOptions {
    text: string;
    value: string;
}