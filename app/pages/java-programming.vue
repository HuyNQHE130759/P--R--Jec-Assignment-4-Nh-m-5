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
        <div class="w-1/2 p-16 login-content my-8">
            <div class="font-bold text-2xl">
                Desktop Java Applications Fundamentals Specialization
            </div>
            <div>
                Explore a Career as a Software. Learn the basics of programming and software development
            </div>
            <div class="flex my-2">
                <el-rate
                    v-model="starPoint"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value} points">
                </el-rate>
                <div class="ml-4">{{ starPoint }} 20,123 ratings</div>
            </div>
            <div class="flex items-center">
                <el-avatar class="mr-2" shape="square" size="normal" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
                Donal Trump + 3 More instructions
            </div>
            <div class="mt-2">
                <ElButton>Enroll For Free</ElButton>
                <div class="mt-2">
                    180,677 already enrolled
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
