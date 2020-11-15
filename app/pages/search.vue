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
                        placeholder="Please Input"
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
        <div class="m-auto p-16 login-content flex my-8">
            <el-tabs v-if="!searching" type="border-card" class="w-full" tab-position="top">
                <el-tab-pane label="My Courses">
                    My Courses
                </el-tab-pane>
                <el-tab-pane label="Notifications">
                    <span slot="label"><i class="el-icon-bell mr-2"/>Notifications</span>
                    <div style="background-color: #dddddd" class="py-2">
                        <i class="el-icon-bell mr-2"/>
                        Ghi Thông Báo Mới
                    </div>
                    <div class="mt-2 py-2" style="background-color: #E6A23C" >
                        <i class="el-icon-bell mr-2"/>
                        Cả lớp chú ý: Hôm nay SWE được mở tài liệuGhi
                    </div>
                    <div class="mt-2 py-2" style="background-color: #04B45F">
                        <i class="el-icon-bell mr-2"/>
                        Môn học PRJ321 đang được bảo trì
                    </div>
                    <div class="text-center mt-16">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Progress">Progress</el-tab-pane>
            </el-tabs>

            <div v-else class="w-full">
                <div class="font-normal">
                    Show 695 total results for "java"
                </div>
                <div>
                    Filter by
                </div>
                <div class="flex justify-between items-center my-4">
                    <el-select v-model="value_lang" placeholder="Select">
                        <el-option
                            v-for="item in languages"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value_special" placeholder="Select">
                        <el-option
                            v-for="item in specials"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value_duration" placeholder="Select">
                        <el-option
                            v-for="item in durations"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value_semester" placeholder="Select">
                        <el-option
                            v-for="item in semesters"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="flex items-center">
                    <img src="https://placehold.jp/16/f39c12/ffffff/100x100.jpg?text=Java&css=%7B%22padding%22%3A%223px%22%7D"/>
                    <div class="ml-4">
                        <div @click="$router.push('/java-programming')" class="text-xl font-bold">
                            Java Programming and Software Engineering Fundamentals
                        </div>
                        <el-link type="primary">University</el-link>
                        <div class="my-2">
                            <el-button size="small">Specialization</el-button>
                        </div>
                        <div class="flex">
                            <el-rate
                                v-model="starPoint"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value} points">
                            </el-rate>
                            <div class="ml-4">{{ starPoint }} (1,146) |  530 students</div>
                        </div>
                        <el-link type="primary">Beginner</el-link>
                    </div>
                </div>
                <div class="flex items-center mt-8">
                    <img src="https://placehold.jp/16/f39c12/ffffff/100x100.jpg?text=Java&css=%7B%22padding%22%3A%223px%22%7D"/>
                    <div class="ml-4">
                        <div class="text-xl font-bold" @click="$router.push('/object/oriented')">
                            Object Oriented Java Programming; Data Structure
                        </div>
                        <el-link type="primary">University</el-link>
                        <div class="my-2">
                            <el-button size="small">Specialization</el-button>
                        </div>
                        <div class="flex">
                            <el-rate
                                v-model="starPoint"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value} points">
                            </el-rate>
                            <div class="ml-4">{{ starPoint }} (1,146) |  530 students</div>
                        </div>
                        <el-link type="primary">Beginner</el-link>
                    </div>
                </div>
                <div class="text-center mt-16">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
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
                state2: '',
                searching: false,
                languages: [{
                    value: '1',
                    label: 'Language'
                }],
                value_lang: '1',
                specials: [{
                    value: '1',
                    label: 'Specialization'
                }],
                value_special: '1',
                durations: [{
                    value: '1',
                    label: 'Duration'
                }],
                value_duration: '1',
                semesters: [{
                    value: '1',
                    label: 'Semester'
                }],
                value_semester: '1',
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
