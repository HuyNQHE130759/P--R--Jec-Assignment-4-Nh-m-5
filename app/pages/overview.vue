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
                <ElSelect v-model="overview" @change="handleChange">
                    <ElOption
                        label="Overview"
                        value="overview"
                    />
                    <ElOption
                        label="Material Download"
                        value="material"
                    />
                </ElSelect>
            </div>

            <div class="mt-4">
                <el-tabs type="border-card" class="w-full" tab-position="top" stretch>
                    <el-tab-pane label="14 September -20 September">
                        No data
                    </el-tab-pane>
                    <el-tab-pane label="14 September -20 September">
                        <div v-if="overview === 'overview'">
                            <div class="text-xl font-bold">
                                Week 1
                            </div>
                            <div class="mt-2">
                                Chapter 0: Introduction
                            </div>
                            <div class="mt-2">
                                Chapter 0: Introduction
                            </div>
                            <div class="mt-2">
                                Chapter 0: Introduction
                            </div>
                            <div class="mt-2">
                                Chapter 0: Introduction
                            </div>
                            <div class="mt-2">
                                Chapter 0: Introduction
                            </div>
                            <div class="mt-2">
                                Link to Material: https://viblo.asia/u/vunguyen10111995
                            </div>
                        </div>
                        <div v-if="overview === 'material'">
                            <div class="text-xl font-bold">
                                Work shop 1&2
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <span>
                                    Danh sách phân nhóm và chủ đề làm assignments / class Exercisefile
                                </span>
                                <ElCheckbox/>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <span>
                                    Danh sách phân nhóm và chủ đề làm assignments / class Exercisefile
                                </span>
                                <ElCheckbox/>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <span>
                                    Danh sách phân nhóm và chủ đề làm assignments / class Exercisefile
                                </span>
                                <ElCheckbox/>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <span>
                                    Danh sách phân nhóm và chủ đề làm assignments / class Exercisefile
                                </span>
                                <ElCheckbox/>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="14 September -20 September">No data</el-tab-pane>
                </el-tabs>
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
                overview: 'overview',
                daterange: '',
                state2: '',
                searching: false,

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

            handleChange(value) {
                this.overview = value
            }
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
