export const ROLE_CONFIG = {
  
  SUPERADMIN: {
    settings: { view: true, create: true, edit: true, delete: true },
    users: { view: 'all', create: 'allExceptSuperAdmin', edit: 'allExceptSuperAdmin', delete: 'allExceptSuperAdmin',
    },
    translations: { view: true, create: true, edit: true, delete: true },
    surveys: {
      questionBank: { view: true, create: true, edit: true, delete: true },
      templates: { view: true, create: true, edit: true, delete: true },
    },
    franchises: { view: true, create: true, edit: true, delete: true },
    groups: { view: true, create: true, edit: true, delete: true },
    venues: { view: true, create: true, edit: true, delete: true },
  },

  FRANCHISEADMIN: {
    settings: { view: 'allExceptFranchises', create: true, edit: true, delete: true,
    },
    users: { view: 'allExceptSuperAdmin',create: 'allExceptSuperAdminAndFranchiseAdmin',edit: 'allExceptSuperAdminAndFranchiseAdmin',delete: 'allExceptSuperAdminAndFranchiseAdmin',
    },
    translations: { view: true, create: true, edit: true, delete: true },
    surveys: {
      questionBank: { view: true, create: true, edit: true, delete: true },
      templates: { view: true, create: true, edit: true, delete: true },
    },
    franchises: { view: false, create: false, edit: false, delete: false },
    groups: { view: 'ownFranchise', create: 'ownFranchise', edit: 'ownFranchise',delete: 'ownFranchise',
    },
    venues: {view: 'ownFranchise', create: 'ownFranchise', edit: 'ownFranchise', delete: 'ownFranchise',
    },
  },

  GROUPADMIN: {
    settings: { view: ['Users', 'Venues'], create: false, edit: false, delete: false,
    },
    users: { view: 'groupManagersAndStaff', create: 'venueManagerAndStaff', edit: 'venueManagerAndStaff', delete: 'venueManagerAndStaff',
    },
    translations: { view: false, create: false, edit: false, delete: false },
    surveys: {
      questionBank: { view: false, create: false, edit: false, delete: false },
      templates: { view: false, create: false, edit: false, delete: false },
    },
    franchises: { view: false, create: false, edit: false, delete: false },
    groups: { view: false, create: false, edit: false, delete: false },
    venues: { view: 'ownGroup', create: false, edit: false, delete: false },
  },

  VENUEADMIN: {
    settings: { view: ['Users'], create: false, edit: false, delete: false },
    users: { view: 'venueManagersAndStaff', create: 'staffMembers',edit: 'staffMembers', delete: 'staffMembers',
    },
    translations: { view: false, create: false, edit: false, delete: false },
    surveys: {
      questionBank: { view: false, create: false, edit: false, delete: false },
      templates: { view: false, create: false, edit: false, delete: false },
    },
    franchises: { view: false, create: false, edit: false, delete: false },
    groups: { view: false, create: false, edit: false, delete: false },
    venues: { view: false, create: false, edit: false, delete: false },
  },
};
