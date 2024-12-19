import { useClerk } from 'vue-clerk'

export function useClerkAuth() {
    const clerk = useClerk()
    const { user } = useUserData()

    async function setClerkOrganization(workspaceId: string) {
        if (!user.value || import.meta.server) {
            return
        }

        // Check if the user has an organization
        // matching the workspace ID
        const workspaceOrgMatch = user.value.organizationMemberships?.find((org) => {
            return org.organization.publicMetadata?.externalId === workspaceId
        })

        if (workspaceOrgMatch) {
            await clerk.setActive({
                organization: workspaceOrgMatch.organization.id,
            })
        }

        await wait(250)
    }

    return {
        setClerkOrganization,
    }
}
