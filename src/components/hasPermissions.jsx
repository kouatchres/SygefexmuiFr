const hasPermissions = (user, requiredPermissions) => {
  const matchedPermissions = user.permissions.filter((permissionsUserHas) =>
    requiredPermissions.includes(permissionsUserHas)
  );
  if (!matchedPermissions.length) {
    throw new Error(`Insufficient permissions : 
            ${requiredPermissions} you have: ${user.permissions}  `);
  }
};

export default hasPermissions;
