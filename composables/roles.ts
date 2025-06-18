import useAuthStore from "~/stores/auth";

enum Roles {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_USER = "ROLE_USER",
}

enum Permissions {
  ACCESS_DASHBOARD = "access_dashboard",
  PUBLISH_COMMENT = "publish_comment",
}

const PERMISSIONS_MAP: {
  [key in Roles]: {
    [key in Permissions]?: boolean;
  };
} = {
  [Roles.ROLE_ADMIN]: {
    [Permissions.ACCESS_DASHBOARD]: true,
  },
  [Roles.ROLE_USER]: {
    [Permissions.PUBLISH_COMMENT]: true,
  },
};

const useRoles = () => {
  const auth = useAuthStore();

  const hasRole = (role: string) => {
    return auth.user?.roles?.includes(role);
  };

  const hasPermission = (permission: Permissions) => {
    const roles = auth.user?.roles;
    if (!roles) return false;

    for (const role of roles) {
      if (PERMISSIONS_MAP[role as Roles][permission]) {
        return true;
      }
    }

    return false;
  };

  return {
    hasRole,
    hasPermission,
  };
};

export default useRoles;

export { Roles, Permissions };
