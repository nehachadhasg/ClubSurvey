/*export type Role = 'SuperAdmin' | 'FranchiseAdmin' | 'GroupAdmin';

export const ACCESS_MATRIX: Record<Role, {
    settings: { viewCards: string[] };
    franchise: { create: boolean; view: boolean; edit: boolean };
    group: { create: boolean; view: boolean; edit: boolean };
    venue: { create: boolean; view: boolean; edit: boolean };
    user: { createRoles: string[]; view: boolean; edit: boolean };
}> = {
    SuperAdmin: {
        settings: { viewCards: ['Franchise', 'Groups', 'Venues', 'Users', 'Surveys', 'Translations'] },
        franchise: { create: true, view: true, edit: true },
        group: { create: true, view: true, edit: true },
        venue: { create: true, view: true, edit: true },
        user: { createRoles: ['Super Admin', 'Franchise Admin', 'Group Admin', 'Venue Admin', 'Translator', 'Staff Member'], view: true, edit: true },
    },
    FranchiseAdmin: {
        settings: { viewCards: ['Groups', 'Venues', 'Users', 'Surveys', 'Translations'] },
        franchise: { create: false, view: false, edit: false },
        group: { create: true, view: true, edit: true },
        venue: { create: true, view: true, edit: true },
        user: { createRoles: ['Group Admin', 'Venue Admin', 'Translator', 'Staff Member'], view: true, edit: true },
    },
    GroupAdmin: {
        settings: { viewCards: ['Venues', 'Users', 'Surveys', 'Translations'] },
        franchise: { create: false, view: false, edit: false },
        group: { create: false, view: true, edit: false },
        venue: { create: true, view: true, edit: true },
        user: { createRoles: ['Venue Admin', 'Translator', 'Staff Member'], view: true, edit: true },
    },
};*/