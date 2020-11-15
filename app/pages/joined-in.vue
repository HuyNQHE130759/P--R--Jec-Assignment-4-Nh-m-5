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
        <div class="p-16 login-content my-4">
            <div class="flex items-center justify-between border border-gray-300 p-4 rounded-lg">
                <div>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">JDP111</el-breadcrumb-item>
                        <el-breadcrumb-item>Week 1</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/joined-in' }">Introduction</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div>
                    Home | Streaming
                </div>
            </div>
            <div class="flex">
                <div class="w-1/4 text-center mr-2" style="background-color: #eeeeee">
                    <div class="text-2xl font-bold p-2 border">
                        Introduction
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="text-2xl font-bold p-2">
                        Lesson 1
                    </div>
                    <div class="flex-col gap-y-4 mx-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="text-2xl font-bold p-2">
                        Lesson 2
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                    <div class="flex-col gap-y-4 mx-2 py-2">
                        <div class="flex items-center">
                            <i class="fas fa-play-circle"></i>
                            <div class="ml-2">
                                <span class="font-bold">Video</span> Introduction for 4 mins
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <iframe width="100%" height="600" src="https://www.youtube.com/embed/tgbNymZ7vqY">

                    </iframe>
                    <div class="mt-4 flex justify-between items-center">
                        <div class="flex">
                            <ElButton class="el-icon-link">
                                Discuss
                            </ElButton>
                            <ElButton class="el-icon-download">
                                Download
                            </ElButton>
                        </div>
                        <div class="flex">
                            <ElButton class="el-icon-share">

                            </ElButton>
                            <ElButton class="far fa-thumbs-up">
                            </ElButton>
                            <ElButton class="far fa-thumbs-down">
                            </ElButton>
                            <ElButton class="fas fa-flag">
                            </ElButton>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center">
                            <span>Chi tiết về cuộc họp</span>
                            <i class="el-icon-arrow-up ml-2"/>
                        </div>
                        <div class="flex items-center">
                            <ElButton class="fal fa-microphone"/>
                            <ElButton class="el-icon-phone-outline ml-2"/>
                            <ElButton class="el-icon-video-camera ml-2"></ElButton>
                        </div>
                        <div>
                            <ElButton class="el-icon-phone-outline">
                                Present Now
                            </ElButton>
                        </div>
                    </div>
                </div>
                <div class="w-1/4 ml-2 text-center" style="background-color: #eeeeee">
                    <div class="text-2xl font-bold p-2 border">
                        Meeting Detail
                    </div>
                    <el-tabs type="border-card" stretch @tab-click="active">
                        <el-tab-pane label="Students">
                            <div class="mt-4 flex-col px-2">
                                <div class="flex relative">
                                    <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                                    <i class="fa fa-microphone" aria-hidden="true" style="position: absolute; bottom: 17px; left: 29px; color: red"></i>
                                    <div class="p-1 bg-white ml-1">
                                        Nguyen Huy Toan (HE140530) (You)
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Message">
                            <div class="mt-4 flex-col px-2">
                                <div v-for="(item, index) in messages" :key="index" class="text-left mt-2">
                                    <span>You: </span> {{ item }}
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <div>
                        <el-input
                            placeholder="Type something"
                            v-model="chatContent">
                            <i slot="suffix" class="el-input__icon el-icon-s-promotion cursor-pointer" @click="sendMessage"></i>
                        </el-input>
                    </div>
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
                chatContent: '',
                messages: ['Hello'],
                daterange: '',
                state2: 'JDP111',
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
            active(tab, event) {
                console.log(tab, event)
            },
            sendMessage() {
                if (this.chatContent.trim() && this.chatContent) {
                    this.messages.push(this.chatContent);
                    this.chatContent = '';
                }
            },
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
