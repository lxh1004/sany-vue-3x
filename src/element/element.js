import Vue from "vue";
import Element from "element-ui";
import { message } from '@/utils/element_api'
import 'element-ui/lib/theme-chalk/index.css'
// 修改 el-dialog 默认点击遮照为不关闭
Element.Dialog.props.closeOnClickModal.default = false

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

Vue.use(Element.Button);
Vue.use(Element.ButtonGroup);
Vue.use(Element.Dropdown);
Vue.use(Element.DropdownItem);
Vue.use(Element.DropdownMenu);
Vue.use(Element.Tabs);
Vue.use(Element.TabPane);
Vue.use(Element.Badge);
Vue.use(Element.DatePicker);
Vue.use(Element.Row);
Vue.use(Element.Col);
Vue.use(Element.Tooltip);
Vue.use(Element.Carousel);
Vue.use(Element.CarouselItem);
Vue.use(Element.Card);
Vue.use(Element.Container);
Vue.use(Element.Header);
Vue.use(Element.Aside);
Vue.use(Element.Main);
Vue.use(Element.Footer);
Vue.use(Element.Breadcrumb);
Vue.use(Element.BreadcrumbItem);
Vue.use(Element.Tabs);
Vue.use(Element.TabPane);
Vue.use(Element.Alert);
// Vue.use(Element.Message)
Vue.use(Element.Carousel);
Vue.use(Element.CarouselItem);
Vue.use(Element.Menu);
Vue.use(Element.Submenu);
Vue.use(Element.MenuItemGroup);
Vue.use(Element.MenuItem);
Vue.use(Element.Input);
Vue.use(Element.Autocomplete);
Vue.use(Element.Select);
Vue.use(Element.Option);
Vue.use(Element.Table);
Vue.use(Element.TableColumn);
Vue.use(Element.Pagination);
Vue.use(Element.Tree);
Vue.use(Element.Link);
Vue.use(Element.DatePicker);
Vue.use(Element.Form);
Vue.use(Element.FormItem);
Vue.use(Element.Radio);
Vue.use(Element.RadioGroup);
Vue.use(Element.RadioButton);
Vue.use(Element.Switch);
Vue.use(Element.Checkbox);
Vue.use(Element.Switch);
Vue.use(Element.CheckboxGroup);
Vue.use(Element.Dialog);
Vue.use(Element.InputNumber);
Vue.use(Element.Upload);
Vue.use(Element.Loading);
Vue.use(Element.Loading.directive);
Vue.use(Element.Cascader);
Vue.use(Element.Transfer);
Vue.use(Element.Steps);
Vue.use(Element.Step);
Vue.use(Element.Popover);
Vue.use(Element.Tag);
Vue.use(Element.Calendar);

Vue.prototype.$message = message;
// Vue.prototype.$message = Element.Message;
Vue.prototype.$messagebox = Element.MessageBox;
Vue.prototype.$confirm = Element.MessageBox.confirm;