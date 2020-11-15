import Vue from 'vue';

import locale from 'element-ui/lib/locale';
import langEn from 'element-ui/lib/locale/lang/en';

import Container from 'element-ui/lib/container';
import Aside from 'element-ui/lib/aside';
import Header from 'element-ui/lib/header';
import Main from 'element-ui/lib/main';

import Message from 'element-ui/lib/message';
import Notification from 'element-ui/lib/notification';
import MessageBox from 'element-ui/lib/message-box';

import Input from 'element-ui/lib/input';
import Select from 'element-ui/lib/select';
import Option from 'element-ui/lib/option';
import OptionGroup from 'element-ui/lib/option-group';
import Switch from 'element-ui/lib/switch';
import Checkbox from 'element-ui/lib/checkbox';
import CheckboxGroup from 'element-ui/lib/checkbox-group';
import Radio from 'element-ui/lib/radio';
import RadioButton from 'element-ui/lib/radio-button';
import RadioGroup from 'element-ui/lib/radio-group';
import Autocomplete from 'element-ui/lib/autocomplete';
import Pagination from 'element-ui/lib/pagination';

import Button from 'element-ui/lib/button';
import ButtonGroup from 'element-ui/lib/button-group';
import Dialog from 'element-ui/lib/dialog';

import Form from 'element-ui/lib/form';
import FormItem from 'element-ui/lib/form-item';
import Alert from 'element-ui/lib/alert';
import Badge from 'element-ui/lib/badge';

import Popover from 'element-ui/lib/popover';
import Dropdown from 'element-ui/lib/dropdown';
import DropdownMenu from 'element-ui/lib/dropdown-menu';
import DropdownItem from 'element-ui/lib/dropdown-item';

import Tabs from 'element-ui/lib/tabs';
import TabPane from 'element-ui/lib/tab-pane';

import Scrollbar from 'element-ui/lib/scrollbar';
import Table from 'element-ui/lib/table';
import TableColumn from 'element-ui/lib/table-column';
import Card from 'element-ui/lib/card';
import Menu from 'element-ui/lib/menu';
import Submenu from 'element-ui/lib/submenu';
import MenuItem from 'element-ui/lib/menu-item';
import MenuItemGroup from 'element-ui/lib/menu-item-group';
import Slider from 'element-ui/lib/slider';
import DatePicker from 'element-ui/lib/date-picker';
import Tag from 'element-ui/lib/tag';
import Breadcrumb from 'element-ui/lib/breadcrumb';
import BreadcrumbItem from 'element-ui/lib/breadcrumb-item';

import Loading from 'element-ui/lib/loading';
import Progress from 'element-ui/lib/progress';

import Upload from 'element-ui/lib/upload';

import Collapse from 'element-ui/lib/collapse';
import CollapseItem from 'element-ui/lib/collapse-item';

import Carousel from 'element-ui/lib/carousel';
import CarouselItem from 'element-ui/lib/carousel-item';
import Tooltip from 'element-ui/lib/tooltip';
import ColorPicker from 'element-ui/lib/color-picker';
import Link from 'element-ui/lib/link';
import Divider from 'element-ui/lib/divider';

import InputNumber from 'element-ui/lib/input-number';
import Steps from 'element-ui/lib/steps';
import Step from 'element-ui/lib/step';
import PopConfirm from 'element-ui/lib/popconfirm';
import Avatar from 'element-ui/lib/avatar';
import Rate from 'element-ui/lib/rate';

import Col from 'element-ui/lib/col';

import Row from 'element-ui/lib/row';


export default function () {
    locale.use(langEn);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;

    Vue.use(Loading.directive);
    Vue.component('ElContainer', Container);
    Vue.component('ElAside', Aside);
    Vue.component('ElHeader', Header);
    Vue.component('ElMain', Main);
    Vue.component('ElPagination', Pagination);

    Vue.component('ElInput', Input);
    Vue.component('ElSelect', Select);
    Vue.component('ElOption', Option);
    Vue.component('ElOptionGroup', OptionGroup);
    Vue.component('ElSwitch', Switch);
    Vue.component('ElCheckbox', Checkbox);
    Vue.component('ElCheckboxGroup', CheckboxGroup);
    Vue.component('ElRadio', Radio);
    Vue.component('ElRadioButton', RadioButton);
    Vue.component('ElRadioGroup', RadioGroup);
    Vue.component('ElAutocomplete', Autocomplete);

    Vue.component('ElButton', Button);
    Vue.component('ElButtonGroup', ButtonGroup);
    Vue.component('ElDialog', Dialog);

    Vue.component('ElForm', Form);
    Vue.component('ElFormItem', FormItem);
    Vue.component('ElAlert', Alert);
    Vue.component('ElBadge', Badge);
    Vue.component('ElMenuItemGroup', MenuItemGroup);

    Vue.component('ElPopover', Popover);
    Vue.component('ElDropdown', Dropdown);
    Vue.component('ElDropdownMenu', DropdownMenu);
    Vue.component('ElDropdownItem', DropdownItem);

    Vue.component('ElTabs', Tabs);
    Vue.component('ElTabPane', TabPane);

    Vue.component('ElScrollbar', Scrollbar);
    Vue.component('ElTable', Table);
    Vue.component('ElTableColumn', TableColumn);
    Vue.component('ElCard', Card);
    Vue.component('ElMenu', Menu);
    Vue.component('ElSubmenu', Submenu);
    Vue.component('ElMenuItem', MenuItem);
    Vue.component('ElSlider', Slider);
    Vue.component('ElDatePicker', DatePicker);
    Vue.component('ElTag', Tag);
    Vue.component('ElBreadcrumb', Breadcrumb);
    Vue.component('ElBreadcrumbItem', BreadcrumbItem);

    Vue.component('ElProgress', Progress);
    Vue.component('ElUpload', Upload);

    Vue.component('ElCollapse', Collapse);
    Vue.component('ElCollapseItem', CollapseItem);

    Vue.component('ElCarousel', Carousel);
    Vue.component('ElCarouselItem', CarouselItem);
    Vue.component('ElTooltip', Tooltip);
    Vue.component('ElColorPicker', ColorPicker);
    Vue.component('ElLink', Link);
    Vue.component('ElDivider', Divider);
    Vue.component('ElInputNumber', InputNumber);

    Vue.component('ElStep', Step);
    Vue.component('ElSteps', Steps);

    Vue.component('ElCol', Col);
    Vue.component('ElPopconfirm', PopConfirm);
    Vue.component('ElRow', Row);
    
    Vue.component('ElAvatar', Avatar);
    Vue.component('ElRate', Rate);
}
