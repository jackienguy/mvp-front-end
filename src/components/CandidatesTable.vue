<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Job Title
                </th>
                <th class="text-left">
                    Candidate Name
                </th>
                <th class="text-left">
                    Resume
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="candidate in candidates"
                :key="candidate.name"
                >
                <td>{{ candidate.jobTitle }}</td>
                <td>{{ candidate.firstName }}</td>
                <td>{{ candidate.lastName }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                candidates: [
                    {jobTitle: ''},
                    {firstName: ''},
                    {lastName: ''},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>