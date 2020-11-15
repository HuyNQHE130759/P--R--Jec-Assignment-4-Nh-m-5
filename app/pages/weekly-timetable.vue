<template>
    <div>
        <div class="login-header flex items-center justify-between p-8">
            <img src="~/assets/images/logo.png" />
            <div class="flex items-center">
                <div>
                    <el-autocomplete
                        class="inline-input"
                        v-model="state2"
                        :fetch-suggestions="querySearch"
                        placeholder="Java Desktop Application"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                    >
                        <i
                            @click="handleClick"
                            class="el-icon-search el-input__icon"
                            slot="suffix">
                        </i>
                    </el-autocomplete>
                </div>
                <ElButton type="warning" class="ml-4">Weekly Timetable</ElButton>
                <div class="ml-4 flex items-center">
                    <ElDropdown>
                        <div class="flex items-center">
                            <ElAvatar shape="square" size="large" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"/>
                            <span class="ml-2">Welcome back,<br/> <ElLink type="primary">Le Anh Son</ElLink></span>
                        </div>
                        <ElDropdownMenu slot="dropdown">
                            <el-dropdown-item>Options</el-dropdown-item>
                            <el-dropdown-item>User Profile</el-dropdown-item>
                            <el-dropdown-item>Settings</el-dropdown-item>
                        </ElDropdownMenu>
                    </ElDropdown>
                </div>
            </div>
        </div>
        <div class="p-16 login-content my-8">
            <div class="font-bold text-2xl">
                Weekly timetable
            </div>
            <div class="block">
                <el-date-picker
                    v-model="daterange"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    value-format="yyyy/mm/dd"
                    end-placeholder="End date">
                </el-date-picker>
            </div>
            <el-table
                :data="tableData"
                height="250"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="Name"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="Monday"
                    >
                    <template slot-scope="{ row }">
                        <span @click="$router.push('/progress')">{{ row.value1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Tuesday">
                    <template slot-scope="{ row }">
                        <span @click="$router.push('/progress')">{{ row.value2 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Wednesday">
                    <template slot-scope="{ row }">
                        <span @click="$router.push('/progress')">{{ row.value1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Thursday">
                    <template slot-scope="{ row }">
                        <span @click="$router.push('/progress')">{{ row.value1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Friday">
                    <template slot-scope="{ row }">
                        <span @click="$router.push('/progress')">{{ row.value1 }}</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="login-footer flex items-center px-8 justify-between py-2" style="background-color: #eeeeee">
            <p>
                © 2020 FPT University, All right reversed.
            </p>
            <div class="flex">
                <i class="fas fa-envelope mr-2" style="color:#e94820"></i>
                <i class="fab fa-facebook mr-2" style="color:#e94820"/>
                <i class="fab fa-instagram mr-2" style="color:#e94820"/>
                <i class="fab fa-google mr-2" style="color:#e94820"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                daterange: '',
                state2: '',
                searching: false,
                tableData: [
                    {
                        name: 'Slot 1',
                        value1: 'JPD121',
                        value2: 'JPD121',
                        value3: 'JPD121',
                        value4: '',
                        value5: 'JPD121'
                    },
                    {
                        name: 'Slot 2',
                        value1: '',
                        value2: 'JPD121',
                        value3: 'JPD121',
                        value4: '',
                        value5: 'JPD121'
                    },
                    {
                        name: 'Slot 3',
                        value1: '',
                        value2: 'JPD121',
                        value3: 'JPD121',
                        value4: '',
                        value5: 'JPD121'
                    },
                    {
                        name: 'Slot 4',
                        value1: 'JPD187',
                        value2: 'JPD141',
                        value3: 'JPK121',
                        value4: '',
                        value5: ''
                    }
                ],
                starPoint: 3.7
            }
        },

        methods: {
            querySearch(queryString, cb) {
                var links = this.links;
                var results = queryString ? links.filter(this.createFilter(queryString)) : links;
                // call callback function to return suggestions
                cb(results);
            },
            createFilter(queryString) {
                return (link) => {
                    return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            },

            handleClick() {
                this.searching = true
            },
            loadAll() {
                return [
                    { "value": "java", "link": "https://github.com/vuejs/vue" },
                    { "value": "php", "link": "https://github.com/ElemeFE/element" },
                    { "value": "", "link": "https://github.com/ElemeFE/cooking" },
                    { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
                    { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
                    { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
                    { "value": "babel", "link": "https://github.com/babel/babel" }
                ];
            },
        },

        mounted() {
            this.links = this.loadAll();
            const heightHeader = this.$el.querySelector('.login-header').clientHeight;
            const heightFooter = this.$el.querySelector('.login-footer').clientHeight;

            const totalHeight = `${heightHeader + heightFooter}px`;
            this.$el.querySelector('.login-content').style.minHeight = `calc(100vh - ${totalHeight})`;
        }
    }
</script>

<style scoped>

</style>
