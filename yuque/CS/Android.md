<h1>—— Android ——</h1>
<p>App类型</p>
<ul>
<li>
<p>原生应用（native application）	专门为特定手机平台开发的应用程序 ，无法在其他平台运行</p>
</li>
<li>
<p>Web 应用（web application）</p>
</li>
<li>
<p>混合应用（hybrid application）	分三层：HTML5 网页层、网页引擎层（本质是一个隔离的浏览器实例）、容器层。</p>
</li>
</ul>
<p>操作系统的架构</p>
<ul>
<li>
<p>应用程序层</p>
</li>
<li>
<p>应用程序框架层</p>
</li>
<li>
<p>核心类库</p>
</li>
<li>
<p>Linux 内核</p>
</li>
</ul>
<p><img src="http://c.biancheng.net/uploads/allimg/190327/5-1Z32G5124H60.gif" alt class="align-none" /></p>
<p>应用程序框架层</p>
<table>
<thead>
<tr>
<th style="text-align:center">系统/服务</th>
<th style="text-align:center">英文名称</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">视图</td>
<td style="text-align:center">View</td>
<td style="text-align:center">丰富的、可扩展的视图集合，用于构建一个应用程序，包括列表 (Lists)、网格 (Grids)、文本框 (TextBoxes)、按钮 (Buttons)，甚至是内嵌的 Web 浏览器。</td>
</tr>
<tr>
<td style="text-align:center">内容管理器</td>
<td style="text-align:center">Content Provider</td>
<td style="text-align:center">使应用可以访问另一个应用的数据或者共享自己的数据。</td>
</tr>
<tr>
<td style="text-align:center">资源管理器</td>
<td style="text-align:center">Resource Manager</td>
<td style="text-align:center">提供访问非代码资源，如本地字符串、图形和分层文件 (layout files)</td>
</tr>
<tr>
<td style="text-align:center">通知管理器</td>
<td style="text-align:center">Notification Manager</td>
<td style="text-align:center">使所有的应用程序都能够在状态栏显示通知信息。</td>
</tr>
<tr>
<td style="text-align:center">活动管理器</td>
<td style="text-align:center">Activity  Manager</td>
<td style="text-align:center">管理应用程序生命周期，并且提供通用的导航回退功能。</td>
</tr>
</tbody>
</table>
<p><strong>应用程序层</strong></p>
<p><strong>四大组件</strong></p>
<ul>
<li>
<p>Activity：用户和应用程序交互的窗口</p>
</li>
<li>
<p>Service：实现程序后台运行的解决方案</p>
</li>
<li>
<p>Content Provide：内容提供者，提供程序所需要的数据</p>
</li>
<li>
<p>Broadcast Receiver：广播接收器，监听外部事件的到来</p>
</li>
</ul>
<h1>UI</h1>
<p>引入布局</p>
<pre data-syntax="java"><code class="lang-java hljs raw">&lt;include layout="@layout/title" /&gt;

</code></pre>
<p>自定义控件</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">&lt;com.uicustomviews.TitleLayout
     android:layout_width="match_parent"
     android:layout_height="wrap_content" /&gt;

class TitleLayout(context: Context, attrs: AttributeSet) : LinearLayout(context, attrs) {
	init {
		LayoutInflater.from(context).inflate(R.layout.title, this)
		titleBack.setOnClickListener {
			val activity = context as Activity
			activity.finish()
		}
		titleEdit.setOnClickListener {
			Toast.makeText(context, "You clicked Edit button", Toast.LENGTH_SHORT).show()
		}
	}
}

</code></pre>
<p><strong>Android 的布局</strong></p>
<p>通过容器的布局属性来管理子控件的位置关系</p>
<ul>
<li>
<p>线性布局：LinearLayout</p>
</li>
<li>
<p>相对布局：RelativeLayout</p>
</li>
<li>
<p>帧布局：FrameLayout</p>
</li>
<li>
<p>绝对布局：AbsoluteLayout</p>
</li>
<li>
<p>表格布局：TableLayout</p>
</li>
<li>
<p>网格布局：GirdLayout</p>
</li>
<li>
<p>约束布局：ConstraintLayout</p>
</li>
</ul>
<p><strong>Android 常用的控件</strong></p>
<ul>
<li>
<p>TextView：文本控件</p>
</li>
<li>
<p>EditText：可编辑文本控件</p>
</li>
<li>
<p>Button：按钮</p>
</li>
<li>
<p>ImageButton：图标按钮</p>
</li>
<li>
<p>ToggleButton:开关按钮</p>
</li>
<li>
<p>ImageView：图片控件</p>
</li>
<li>
<p>CheckBox：复选框控件</p>
</li>
<li>
<p>RadioButton：单选框控件</p>
</li>
</ul>
<h2><a href="https://developer.android.google.cn/guide/topics/resources/providing-resources?hl=zh-cn" target="_blank">应用资源</a></h2>
<p>res</p>
<ul>
<li>
<p>drawable	图片</p>
</li>
<li>
<p>mipmap 	应用图标</p>
</li>
<li>
<p>values	字符串、样式、颜色等配置</p>
</li>
<li>
<p>layout	布局文件</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">目录</th>
<th style="text-align:center">资源类型</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">animator/</td>
<td style="text-align:center">用于定义<a href="https://developer.android.google.cn/guide/topics/graphics/prop-animation?hl=zh-cn" target="_blank">属性动画的</a> XML 文件。</td>
</tr>
<tr>
<td style="text-align:center">anim/</td>
<td style="text-align:center">用于定义<a href="https://developer.android.google.cn/guide/topics/graphics/view-animation?hl=zh-cn#tween-animation" target="_blank">渐变动画的</a> XML 文件</td>
</tr>
<tr>
<td style="text-align:center">color/</td>
<td style="text-align:center">用于定义颜色状态列表的 XML 文件。<a href="https://developer.android.google.cn/guide/topics/resources/color-list-resource?hl=zh-cn" target="_blank">颜色状态列表资源</a></td>
</tr>
<tr>
<td style="text-align:center">drawable/</td>
<td style="text-align:center">位图文件（.png、.9.png、.jpg、.gif）</td>
</tr>
<tr>
<td style="text-align:center">mipmap/</td>
<td style="text-align:center">启动器图标。<a href="https://developer.android.google.cn/tools/projects?hl=zh-cn#mipmap" target="_blank">管理项目概览。</a></td>
</tr>
<tr>
<td style="text-align:center">layout/</td>
<td style="text-align:center">用于定义用户界面布局的 XML 文件。请参阅<a href="https://developer.android.google.cn/guide/topics/resources/layout-resource?hl=zh-cn" target="_blank">布局资源。</a></td>
</tr>
<tr>
<td style="text-align:center">menu/</td>
<td style="text-align:center">用于定义应用菜单（如选项菜单、上下文菜单或子菜单）的 XML 文件。请参阅<a href="https://developer.android.google.cn/guide/topics/resources/menu-resource?hl=zh-cn" target="_blank">菜单资源。</a></td>
</tr>
<tr>
<td style="text-align:center">raw/</td>
<td style="text-align:center">需以原始形式保存的任意文件。</td>
</tr>
<tr>
<td style="text-align:center">values/</td>
<td style="text-align:center">包含字符串、整型数和颜色等简单值的 XML 文件。 arrays.xml：资源数组（类型数组）。 colors.xml：颜色值。 dimens.xml：尺寸值。 strings.xml：字符串值。 styles.xml：样式。 请参阅字符串资源、样式资源和更多资源类型。</td>
</tr>
<tr>
<td style="text-align:center">xml/</td>
<td style="text-align:center">可在运行时通过调用 <a href="https://developer.android.google.cn/reference/android/content/res/Resources?hl=zh-cn#getXml(int)" target="_blank">Resources.getXML() </a>读取的任意 XML 文件。各种 XML 配置文件（如可搜索配置）都必须保存在此处。</td>
</tr>
<tr>
<td style="text-align:center">font/</td>
<td style="text-align:center">带有扩展名的字体文件（如 .ttf、.otf 或 .ttc），或包含  元素的 XML 文件。如需详细了解作为资源的字体，请参阅 <a href="https://developer.android.google.cn/preview/features/fonts-in-xml?hl=zh-cn" target="_blank">XML 中的字体。</a></td>
</tr>
</tbody>
</table>
<p>访问资源的方法</p>
<ul>
<li>
<p>在代码中	[&lt;package_name&gt;.]R.&lt;resource_type&gt;.&lt;resource_name&gt;	R.string.app_name</p>
</li>
<li>
<p>在XML中	@[&lt;package_name&gt;:]&lt;resource_type&gt;/&lt;resource_name&gt;	@string/app_name</p>
</li>
</ul>
<p>单位</p>
<ul>
<li>
<p>px	pixe，像素。一个像素单位对应一个屏幕像素单位。不推荐使用px，不会根据屏幕密度自动缩放。</p>
</li>
<li>
<p>dp	density-independent pixel，密度无关像素。1dp在设备屏幕上总是等于1/160英寸。</p>
</li>
<li>
<p>sp	scale-independent pixel，缩放无关像素。通常用来设置屏幕上的字体大小。</p>
</li>
</ul>
<p>AndroidManifest.xml</p>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/action-element?hl=zh-cn" target="_blank"></a></th>
<th style="text-align:center">向 Intent 过滤器添加操作。</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/activity-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明 Activity 组件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/activity-alias-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明 Activity 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/application-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">应用的声明。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/category-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">向 Intent 过滤器添加类别名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/compatible-screens-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指定与应用兼容的每个屏幕配置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/data-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">向 Intent 过滤器添加数据规范。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/grant-uri-permission-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指定父级内容提供程序有权访问的应用数据的子集。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/instrumentation-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明支持您监控应用与系统进行交互的 Instrumentation 类。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/intent-filter-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指定 Activity、服务或广播接收器可以响应的 Intent 类型。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/manifest-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">AndroidManifest.xml 文件的根元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/meta-data-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">可以提供给父级组件的其他任意数据项的名称-值对。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/path-permission-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">定义内容提供程序中特定数据子集的路径和所需权限。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/permission-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明安全权限，可用于限制对此应用或其他应用的特定组件或功能的访问。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/permission-group-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">为相关权限的逻辑分组声明名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/permission-tree-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明权限树的基本名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/provider-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明内容提供程序组件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/receiver-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明广播接收器组件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/service-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明服务组件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/supports-gl-texture-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明应用支持的一种 GL 纹理压缩格式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/supports-screens-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明应用支持的屏幕尺寸，并为大于此尺寸的屏幕启用屏幕兼容模式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/uses-configuration-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指明应用要求的特定输入功能。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/uses-feature-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">声明应用使用的单个硬件或软件功能。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/uses-library-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指定应用必须链接到的共享库。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/uses-permission-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指定为使应用正常运行，用户必须授予的系统权限。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/uses-permission-sdk-23-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">指明应用需要特定权限，但仅当应用在运行 Android 6.0（API 级别 23）或更高版本的设备上安装时才需要。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=zh-cn" target="_blank"></a></td>
<td style="text-align:center">您可以通过整数形式的 API 级别，表示应用与一个或多个版本的 Android 平台的兼容性。</td>
</tr>
</tbody>
</table>
<p>Android中的日志工具类是Log（android.util.Log）</p>
<ul>
<li>
<p>Log.v(tag, msg)</p>
</li>
<li>
<p>Log.d()</p>
</li>
<li>
<p>Log.i()</p>
</li>
<li>
<p>Log.w()</p>
</li>
<li>
<p>Log.e()</p>
</li>
</ul>
<h2><a href="https://developer.android.google.cn/reference/android/app/Activity" target="_blank">Activity</a></h2>
<p><a href="https://developer.android.google.cn/reference/android/app/Activity?hl=zh-cn" target="_blank">Activity</a> 类是 Android 应用的关键组件，而 Activity 的启动和组合方式则是该平台应用模型的基本组成部分。</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">调用时间</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">onCreate(Bundle savedInstanceState)</td>
<td style="text-align:center">创建 Activity 时调用。  设置在该方法中，还以 Bundle 的形式提供对以前储存的任何状态的访问。其中参数 savedInstanceState 对象是用于保存 Activity 的对象的状态。</td>
</tr>
<tr>
<td style="text-align:center">onStart()</td>
<td style="text-align:center">Activity 变为在屏幕上对用户可见时调用。</td>
</tr>
<tr>
<td style="text-align:center">onResume()</td>
<td style="text-align:center">Activity 开始与用户交互时调用（无论是启动还是重启一个活动，该方法总是被调用）。</td>
</tr>
<tr>
<td style="text-align:center">onPause()</td>
<td style="text-align:center">当 Android 系统要激活其他 Activity 时，该方法被调用，暂停或收回 CPU 和其他资源时调用。</td>
</tr>
<tr>
<td style="text-align:center">onStop()</td>
<td style="text-align:center">Activity 被停止并转为不可见阶段时调用。</td>
</tr>
<tr>
<td style="text-align:center">onRestart()</td>
<td style="text-align:center">重新启动已经停止的 Activity 时调用。</td>
</tr>
<tr>
<td style="text-align:center">onDestroy()</td>
<td style="text-align:center">Activity 被完全从系统内存中移除时调用。  该方法被调用可能是因为有人直接调用 finish() 方法或者系统决定停止该活动以释放资源。</td>
</tr>
</tbody>
</table>
<p><img src="https://developer.android.google.cn/guide/components/images/activity_lifecycle.png" alt class="align-none" /></p>
<p>活动间数据传递</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public class ParentActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d("ParentActivity", "Task id is " + getTaskId());
        setContentView(R.layout.parent_layout);
        Button button = (Button) findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            //  向下一个活动传递数据
                Intent intent = new Intent(ParentActivity.this, ChildActivity.class);
                intent.putExtra("extra_data", "data");        
                startActivity(intent);
             //   更好地传递方式                
             //   SecondActivity.actionStart(ParentActivity.this, "data");
             
             // 接收前提
             // startActivityForResult(intent, 1);

            }
        });
    }
    
    // 用于接收上一个活动关闭后返回的数据
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case 1:
                if (resultCode == RESULT_OK) {
                    String returnedData = data.getStringExtra("data_return");
                    Log.d("ParentActivity", returnedData);
                }
                break;
            default:
        }
    }

}


public class ChildActivity extends AppCompatActivity {
    // 方便传递到此活动的方法
    public static void actionStart(Context context, String data) {
        Intent intent = new Intent(context, ChildActivity.class);
        intent.putExtra("extra_data", data);
        context.startActivity(intent);
    }
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ...
        // 接收数据
        Intent intent = getIntent();
        String data = intent.getStringExtra("extra_data");
    }
    
    // 传递返回数据
    @Override
    public void onBackPressed() {
        Intent intent = new Intent();
        intent.putExtra("data_return", "Hello ParentActivity");
        setResult(RESULT_OK, intent);
        finish();
    }
}

</code></pre>
<p><a href="https://developer.android.google.cn/reference/androidx/fragment/app/Fragment?hl=zh-cn" target="_blank">Fragment</a> 表示应用界面中可重复使用的一部分</p>
<p><img src="https://developer.android.google.cn/images/guide/fragments/fragment-view-lifecycle.png?hl=zh-cn" alt class="align-none" /></p>
<pre data-syntax="java"><code class="lang-java hljs raw">public class LeftFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.left_fragment, container, false);
        return view;
    }
}

// Main 动态添加碎片
public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button) findViewById(R.id.button);
        button.setOnClickListener(this);
        replaceFragment(new RightFragment());
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.button:
                replaceFragment(new AnotherRightFragment());
                break;
            default:
                break;
        }
    }

    private void replaceFragment(Fragment fragment) {
        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        transaction.replace(R.id.right_layout, fragment);
        transaction.commit();
    }
}

</code></pre>
<h2><a href="https://developer.android.google.cn/guide/components/intents-filters?hl=zh-cn" target="_blank">Intent</a></h2>
<p><a href="https://developer.android.google.cn/reference/android/content/Intent?hl=zh-cn" target="_blank">Intent</a>是一个消息传递对象，可以用来从其他应用组件请求操作</p>
<ul>
<li>显式 Intent：通过提供目标应用的软件包名称或完全限定的组件类名来指定可处理 Intent 的应用。</li>
</ul>
<pre data-syntax="java"><code class="lang-java hljs raw">// Executed in an Activity, so 'this' is the Context
// The fileUrl is a string URL, such as "http://www.example.com/image.png"
Intent downloadIntent = new Intent(this, DownloadService.class);
downloadIntent.setData(Uri.parse(fileUrl));
startService(downloadIntent);

</code></pre>
<ul>
<li>隐式 Intent ：不会指定特定的组件，而是声明要执行的常规操作，从而允许其他应用中的组件来处理。</li>
</ul>
<pre data-syntax="java"><code class="lang-java hljs raw">// Create the text message with a string
Intent sendIntent = new Intent();
sendIntent.setAction(Intent.ACTION_SEND);
sendIntent.putExtra(Intent.EXTRA_TEXT, textMessage);
sendIntent.setType("text/plain");

// Verify that the intent will resolve to an activity
if (sendIntent.resolveActivity(getPackageManager()) != null) {
    startActivity(sendIntent);
}

</code></pre>
<p>接收</p>
<pre data-syntax="java"><code class="lang-java hljs raw">&lt;activity android:name="ShareActivity"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.SEND"/&gt;
        &lt;category android:name="android.intent.category.DEFAULT"/&gt;
        &lt;data android:mimeType="text/plain"/&gt;
    &lt;/intent-filter&gt;
&lt;/activity&gt;

</code></pre>
<h2><a href="https://developer.android.google.cn/guide/components/services?hl=zh-cn" target="_blank">服务</a></h2>
<p><a href="https://developer.android.google.cn/reference/android/app/Service?hl=zh-cn" target="_blank">Service</a> 是一种可在后台执行长时间运行操作而不提供界面的应用组件</p>
<pre data-syntax="java"><code class="lang-java hljs raw">public class MyService extends Service {

    private DownloadBinder downloadBinder = new DownloadBinder();

    class DownloadBinder extends Binder{
        public void startDownload(){
            Log.d("MyService", "startDownload");
        }

        public int getProgress(){
            Log.d("MyService", "getProgress");
            return 0;
        }
    }


    public MyService() {
    }

    @Override
    public IBinder onBind(Intent intent) {
        return downloadBinder;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d("MyService", "onCreate executed");
        // 前台服务
        Intent intent=new Intent(this,MainActivity.class);
        PendingIntent pi = PendingIntent.getActivity(this,0,intent,0);
        Notification notification=new NotificationCompat.Builder(this)
                .setContentTitle("Title -")
                .setContentText("--Content--")
                .setWhen(System.currentTimeMillis())
                .setSmallIcon(R.mipmap.ic_launcher)
                .setLargeIcon(BitmapFactory.decodeResource(getResources(),R.mipmap.ic_launcher))
                .setContentIntent(pi)
                .build();
        startForeground(1,notification);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d("MyService", "onStartCommand");
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        Log.d("MyService", "onDestroy");
        super.onDestroy();
    }
}


// Main
public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private MyService.DownloadBinder downloadBinder;
    private ServiceConnection connection=new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            downloadBinder = (MyService.DownloadBinder) service;
            downloadBinder.startDownload();
            downloadBinder.getProgress();
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {

        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button startService = (Button) findViewById(R.id.start_service);
        Button stopService = (Button) findViewById(R.id.stop_service);
        startService.setOnClickListener(this);
        stopService.setOnClickListener(this);
        Button bindService = (Button) findViewById(R.id.bind_service);
        Button unbindService = (Button) findViewById(R.id.unbind_service);
        bindService.setOnClickListener(this);
        unbindService.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.start_service:
                Intent startIntent = new Intent(this, MyService.class);
                startService(startIntent); // 启动服务
                break;
            case R.id.stop_service:
                Intent stopIntent = new Intent(this, MyService.class);
                stopService(stopIntent); // 停止服务
                break;
            case R.id.bind_service:
                Intent bindIntent = new Intent(this, MyService.class);
                bindService(bindIntent, connection, BIND_AUTO_CREATE); // 绑定服务
                break;
            case R.id.unbind_service:
                unbindService(connection); // 解绑服务
                break;
            default:
                break;

        }
    }
}

</code></pre>
<h2><a href="https://developer.android.google.cn/guide/topics/permissions/overview?hl=zh-cn" target="_blank">权限</a></h2>
<p>安装时权限</p>
<p>运行时权限</p>
<pre data-syntax="java"><code class="lang-java hljs raw">
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button makeCall = (Button) findViewById(R.id.make_call);
        makeCall.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.
                        permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(MainActivity.this, new
                            String[]{ Manifest.permission.CALL_PHONE }, 1);
                } else {
                    call();
                }
            }
        });
    }
    private void call() {
        try {
            Intent intent = new Intent(Intent.ACTION_CALL);
            intent.setData(Uri.parse("tel:10086"));
            startActivity(intent);
        } catch (SecurityException e) {
            e.printStackTrace();
        }
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions,
                                           int[] grantResults) {
        switch (requestCode) {
            case 1:
                if (grantResults.length &gt; 0 &amp;&amp; grantResults[0] == PackageManager.
                        PERMISSION_GRANTED) {
                    call();
                } else {
                    Toast.makeText(this, "You denied the permission", Toast.LENGTH_
                            SHORT).show();
                }
                break;
            default:
        }
    }
}

</code></pre>
<p>特殊权限	与特定的应用操作相对应。只有平台和原始设备制造商 (OEM) 可以定义特殊权限</p>
<h2>数据存储</h2>
<ul>
<li>数据和文件存储概览</li>
</ul>
<p><strong>文件存储</strong></p>
<p>默认目录：/data/data//files/</p>
<p>文件的操作模式: MODE_PRIVATE、MODE_APPEND</p>
<pre data-syntax="java"><code class="lang-java hljs raw">// 存
public void save(String data) {
	FileOutputStream out = null;
	BufferedWriter writer = null;
	try {
		out = openFileOutput("filename", Context.MODE_PRIVATE);
		writer = new BufferedWriter(new OutputStreamWriter(out));
		writer.write(data);
	} catch (IOException e) {
		e.printStackTrace();
	} finally {
		try {
			if (writer != null) {
    			writer.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

// 取
public String load() {
	FileInputStream in = null;
	BufferedReader reader = null;
	StringBuilder content = new StringBuilder();
	try {
		in = openFileInput("filename");
		reader = new BufferedReader(new InputStreamReader(in));
		String line = "";
		while ((line = reader.readLine()) != null) {
			content.append(line);
		}
	} catch (IOException e) {
		e.printStackTrace();
	} finally {
		if (reader != null) {
			try {
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	return content.toString();
}

</code></pre>
<p><strong>SharedPreferences存储</strong></p>
<p>使用键值对的方式来存储数据</p>
<p>默认目录：/data/data//shared_prefs/&lt;filename.xml&gt;</p>
<p>文件操作模式：MODE_PRIVATE</p>
<p>写</p>
<pre data-syntax="java"><code class="lang-java hljs raw">SharedPreferences.Editor editor = getSharedPreferences("filename",MODE_PRIVATE).edit();
editor.putString("name", "Tom");
editor.putInt("age", 28);
editor.putBoolean("married", false);
editor.apply();

</code></pre>
<p>读</p>
<pre data-syntax="java"><code class="lang-java hljs raw">SharedPreferences pref = getSharedPreferences("filename", MODE_PRIVATE);
String name = pref.getString("name", "");
int age = pref.getInt("age", 0);
boolean married = pref.getBoolean("married", false);

</code></pre>
<h2>内容提供器（Content Provider）</h2>
<p>实现跨程序共享数据，同时保证被访数据的安全性。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public class DatabaseProvider extends ContentProvider {
    public static final int BOOK_DIR = 0;
    public static final int BOOK_ITEM = 1;
    public static final int CATEGORY_DIR = 2;
    public static final int CATEGORY_ITEM = 3;
    public static final String AUTHORITY = "com.example.databasetest.provider";
    private static UriMatcher uriMatcher;

    static {
        uriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
        uriMatcher.addURI(AUTHORITY, "book", BOOK_DIR);
        uriMatcher.addURI(AUTHORITY, "book/#", BOOK_ITEM);
        uriMatcher.addURI(AUTHORITY, "category", CATEGORY_DIR);
        uriMatcher.addURI(AUTHORITY, "category/#", CATEGORY_ITEM);
    }

    private MyDatabaseHelper dbHelper;

    @Override
    public boolean onCreate() {
        dbHelper = new MyDatabaseHelper(getContext(), "BookStore.db", null, 2);
        return true;
    }

    @Override
    public Cursor query(Uri uri, String[] projection, String selection,
        String[] selectionArgs, String sortOrder) {
        // 查询数据
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        Cursor cursor = null;

        switch (uriMatcher.match(uri)) {
        case BOOK_DIR:
            cursor = db.query("Book", projection, selection, selectionArgs,
                    null, null, sortOrder);
            break;

        case BOOK_ITEM:
            String bookId = uri.getPathSegments().get(1);
            cursor = db.query("Book", projection, "id = ?",
                    new String[] { bookId }, null, null, sortOrder);
            break;

        case CATEGORY_DIR:
            cursor = db.query("Category", projection, selection, selectionArgs,
                    null, null, sortOrder);
            break;

        case CATEGORY_ITEM:
            String categoryId = uri.getPathSegments().get(1);
            cursor = db.query("Category", projection, "id = ?",
                    new String[] { categoryId }, null, null, sortOrder);
            break;

        default:
            break;
        }

        return cursor;
    }

    @Override
    public Uri insert(Uri uri, ContentValues values) {
        // 添加数据
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        Uri uriReturn = null;

        switch (uriMatcher.match(uri)) {
        case BOOK_DIR:
        case BOOK_ITEM:
            long newBookId = db.insert("Book", null, values);
            uriReturn = Uri.parse("content://" + AUTHORITY + "/book/" +
                    newBookId);
            break;

        case CATEGORY_DIR:
        case CATEGORY_ITEM:
            long newCategoryId = db.insert("Category", null, values);
            uriReturn = Uri.parse("content://" + AUTHORITY + "/category/" +
                    newCategoryId);
            break;

        default:
            break;
        }

        return uriReturn;
    }

    @Override
    public int update(Uri uri, ContentValues values, String selection,
        String[] selectionArgs) {
        // 更新数据
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        int updatedRows = 0;

        switch (uriMatcher.match(uri)) {
        case BOOK_DIR:
            updatedRows = db.update("Book", values, selection, selectionArgs);
            break;

        case BOOK_ITEM:
            String bookId = uri.getPathSegments().get(1);
            updatedRows = db.update("Book", values, "id = ?",
                    new String[] { bookId });
            break;

        case CATEGORY_DIR:
            updatedRows = db.update("Category", values, selection, selectionArgs);
            break;

        case CATEGORY_ITEM:
            String categoryId = uri.getPathSegments().get(1);
            updatedRows = db.update("Category", values, "id = ?",
                    new String[] { categoryId });
            break;

        default:
            break;
        }

        return updatedRows;
    }

    @Override
    public int delete(Uri uri, String selection, String[] selectionArgs) {
        // 删除数据
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        int deletedRows = 0;

        switch (uriMatcher.match(uri)) {
        case BOOK_DIR:
            deletedRows = db.delete("Book", selection, selectionArgs);
            break;

        case BOOK_ITEM:
            String bookId = uri.getPathSegments().get(1);
            deletedRows = db.delete("Book", "id = ?", new String[] { bookId });
            break;

        case CATEGORY_DIR:
            deletedRows = db.delete("Category", selection, selectionArgs);
            break;

        case CATEGORY_ITEM:
            String categoryId = uri.getPathSegments().get(1);
            deletedRows = db.delete("Category", "id = ?",
                    new String[] { categoryId });
            break;

        default:
            break;
        }

        return deletedRows;
    }

    @Override
    public String getType(Uri uri) {
        switch (uriMatcher.match(uri)) {
        case BOOK_DIR:
            return "vnd.android.cursor.dir/vnd.com.example.databasetest.provider.book";
        case BOOK_ITEM:
            return "vnd.android.cursor.item/vnd.com.example.databasetest.provider.book";
        case CATEGORY_DIR:
            return "vnd.android.cursor.dir/vnd.com.example.databasetest.provider.category";
        case CATEGORY_ITEM:
            return "vnd.android.cursor.item/vnd.com.example.databasetest.provider.category";
        }
        return null;
    }
}

</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">class MainActivity : AppCompatActivity() {
 var bookId: String? = null
 override fun onCreate(savedInstanceState: Bundle?) {
 super.onCreate(savedInstanceState)
 setContentView(R.layout.activity_main)
 addData.setOnClickListener {
 // 添加数据
 val uri = Uri.parse("content://com.example.databasetest.provider/book")
 val values = contentValuesOf("name" to "A Clash of Kings",
 "author" to "George Martin", "pages" to 1040, "price" to 22.85)
 val newUri = contentResolver.insert(uri, values)
 bookId = newUri?.pathSegments?.get(1)
 }
 queryData.setOnClickListener {
 // 查询数据
 val uri = Uri.parse("content://com.example.databasetest.provider/book")
 contentResolver.query(uri, null, null, null, null)?.apply {
 while (moveToNext()) {
 val name = getString(getColumnIndex("name"))
 val author = getString(getColumnIndex("author"))
 val pages = getInt(getColumnIndex("pages"))
 val price = getDouble(getColumnIndex("price"))
 Log.d("MainActivity", "book name is $name")
 Log.d("MainActivity", "book author is $author")
 Log.d("MainActivity", "book pages is $pages")
 Log.d("MainActivity", "book price is $price")
 }
 close()
 }
 }
 updateData.setOnClickListener {
 // 更新数据
 bookId?.let {
 val uri = Uri.parse("content://com.example.databasetest.provider/
 book/$it")
 val values = contentValuesOf("name" to "A Storm of Swords",
 "pages" to 1216, "price" to 24.05)
 contentResolver.update(uri, values, null, null)
 }
 }
 deleteData.setOnClickListener {
 // 删除数据
 bookId?.let {
 val uri = Uri.parse("content://com.example.databasetest.provider/
 book/$it")
 contentResolver.delete(uri, null, null)
 }
 }
 }
}

</code></pre>
<h2><a href="https://developer.android.google.cn/guide/components/broadcasts?hl=zh-cn" target="_blank">广播</a></h2>
<p>标准广播 （Normal broadcasts）是一种完全异步执行的广播，在广播发出之后，所有的广播接收器几乎都会在同一时刻接收到这条广播消息</p>
<p>有序广播 （Ordered broadcasts）则是一种同步执行的广播，在广播发出之后，同一时刻只会有一个广播接收器能够收到这条广播消息</p>
<p>接收系统广播</p>
<pre><code>动态注册监听网络变化

&lt;uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /&gt;
</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public class MainActivity extends AppCompatActivity {
	private IntentFilter intentFilter;
	private NetworkChangeReceiver networkChangeReceiver;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		intentFilter = new IntentFilter();
		intentFilter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
		networkChangeReceiver = new NetworkChangeReceiver();
		registerReceiver(networkChangeReceiver, intentFilter);
	}
	
	@Override
	protected void onDestroy() {
		super.onDestroy();
		unregisterReceiver(networkChangeReceiver);
	}
	
	class NetworkChangeReceiver extends BroadcastReceiver {
		@Override
		public void onReceive(Context context, Intent intent) {
			ConnectivityManager connectionManager = (ConnectivityManager)
			getSystemService(Context.CONNECTIVITY_SERVICE);
			NetworkInfo networkInfo = connectionManager.getActiveNetworkInfo();
			if (networkInfo != null &amp;&amp; networkInfo.isAvailable()) {
				Toast.makeText(context, "network is available",
				Toast.LENGTH_SHORT).show();
			} else {
				Toast.makeText(context, "network is unavailable",
				Toast.LENGTH_SHORT).show();
			}
		}
	}

}	

</code></pre>
<p>静态注册实现开机启动</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public class BootCompleteReceiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		Toast.makeText(context, "Boot Complete", Toast.LENGTH_LONG).show();
	}
}

</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">&lt;application
	android:allowBackup="true"
	android:icon="@mipmap/ic_launcher"
	android:label="@string/app_name"
	android:supportsRtl="true"
	android:theme="@style/AppTheme"&gt;
	...
	&lt;receiver
		android:name=".BootCompleteReceiver"
		android:enabled="true"
		android:exported="true"&gt;
		&lt;intent-filter&gt;
			&lt;action android:name="android.intent.action.BOOT_COMPLETED" /&gt;
		&lt;/intent-filter&gt;
	&lt;/receiver&gt;
&lt;/application&gt;

</code></pre>
<p>自定义广播</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public class MyBroadcastReceiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		Toast.makeText(context, "received in MyBroadcastReceiver", Toast.LENGTH_
		SHORT).show();
	}
}

</code></pre>
<pre data-syntax="java"><code class="lang-java hljs raw">&lt;receiver
	android:name=".MyBroadcastReceiver"
	android:enabled="true"
	android:exported="true"&gt;
	&lt;intent-filter&gt;
		&lt;action android:name="com.example.broadcasttest.MY_BROADCAST"/&gt;
	&lt;/intent-filter&gt;
&lt;/receiver&gt;

</code></pre>
<pre data-syntax="java"><code class="lang-java hljs raw">Intent intent = new Intent("com.example.broadcasttest.MY_BROADCAST");
// 默认情况下发出的自定义广播是隐式广播
// 调用setPackage()方法，指定广播发送给哪个应用程序的，从而让它变成一条显式广播
intent.setPackage(getpackageName()))
sendBroadcast(intent);
sendOrderedBroadcast(intent, null);

</code></pre>
<p>广播截断，以阻止其继续传播</p>
<pre data-syntax="java"><code class="lang-java hljs raw">abortBroadcast();	

</code></pre>
<p>本地广播</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public class MainActivity extends AppCompatActivity {
	private IntentFilter intentFilter;
	private LocalReceiver localReceiver;
	private LocalBroadcastManager localBroadcastManager;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		localBroadcastManager = LocalBroadcastManager.getInstance(this); // 获取实例
		Button button = (Button) findViewById(R.id.button);
		button.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent("com.example.broadcasttest.LOCAL_
				BROADCAST");
				localBroadcastManager.sendBroadcast(intent); // 发送本地广播
			}
		});
		
		intentFilter = new IntentFilter();
		intentFilter.addAction("com.example.broadcasttest.LOCAL_BROADCAST");
		localReceiver = new LocalReceiver();
		localBroadcastManager.registerReceiver(localReceiver, intentFilter); // 注册本地广播监听器
	}
	
		@Override
		protected void onDestroy() {
			super.onDestroy();
			localBroadcastManager.unregisterReceiver(localReceiver);
		}
		
		class LocalReceiver extends BroadcastReceiver {
			@Override
			public void onReceive(Context context, Intent intent) {
				Toast.makeText(context, "received local broadcast", Toast.LENGTH_SHORT).
				show();
		}
	}
}

</code></pre>
<h2>Notification</h2>
<pre data-syntax="java"><code class="lang-java hljs raw">Intent intent = new Intent(this, NotificationActivity.class);
// 执行相应的逻辑
PendingIntent pi = PendingIntent.getActivity(this, 0, intent, 0);
NotificationManager manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
Notification notification = new NotificationCompat.Builder(this)
	.setContentTitle("This is content title")
	.setContentText("This is content text")
	.setWhen(System.currentTimeMillis())
	.setSmallIcon(R.mipmap.ic_launcher)
	.setLargeIcon(BitmapFactory.decodeResource(getResources(),R.mipmap.ic_launcher))
	.setContentIntent(pi)
	.setAutoCancel(true)
	.build();
 
// 显示通知
manager.notify(1, notification);

</code></pre>
<pre><code>.setSound(Uri.fromFile(new File("/system/media/audio/ringtones/Luna.ogg")))

.setVibrate(new long[] {0, 1000, 1000, 1000 })

.setLights(Color.GREEN, 1000, 1000)

.setDefaults(NotificationCompat.DEFAULT_ALL)

.setStyle(new NotificationCompat.BigPictureStyle().bigPicture(BitmapFactory.decodeResource(getResources(), R.drawable.big_image)))

.setPriority(NotificationCompat.PRIORITY_MAX)

	PRIORITY_DEFAULT

	PRIORITY_MIN

	PRIORITY_LOW

	PRIORITY_HIGH

	PRIORITY_MAX
</code></pre>
<h2>多媒体</h2>
<p>功能声明</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="com.bignerdranch.android.criminalintent" &gt;

    &lt;uses-feature android:name="android.hardware.camera"
    android:required="false"/&gt;
    ...
&lt;/manifest&gt;

</code></pre>
<p><strong>调用摄像头和相册</strong></p>
<pre data-syntax="java"><code class="lang-java hljs raw">public class MainActivity extends AppCompatActivity {
    public static final int TAKE_PHOTO = 1;
    public static final int CHOOSE_PHOTO = 2;

    private ImageView picture;
    private Uri imageUri;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button takePhoto = (Button) findViewById(R.id.take_photo);
        Button chooseFromAlbum = (Button) findViewById(R.id.choose_from_album);
        picture = (ImageView) findViewById(R.id.picture);
        takePhoto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 创建File对象，用于存储拍照后的图片
                File outputImage = new File(getExternalCacheDir(), "output_image.jpg");
                try {
                    if (outputImage.exists()) {
                        outputImage.delete();
                    }
                    outputImage.createNewFile();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                if (Build.VERSION.SDK_INT &lt; 24) {
                    imageUri = Uri.fromFile(outputImage);
                } else {
                    imageUri = FileProvider.getUriForFile(MainActivity.this, "com.example.cameraalbumtest.fileprovider", outputImage);
                }
                // 启动相机程序
                Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
                intent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri);
                startActivityForResult(intent, TAKE_PHOTO);
            }
        });
        chooseFromAlbum.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(MainActivity.this, new String[]{ Manifest.permission. WRITE_EXTERNAL_STORAGE }, 1);
                } else {
                    openAlbum();
                }
            }
        });
    }

    private void openAlbum() {
        Intent intent = new Intent("android.intent.action.GET_CONTENT");
        intent.setType("image/*");
        startActivityForResult(intent, CHOOSE_PHOTO); // 打开相册
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case 1:
                if (grantResults.length &gt; 0 &amp;&amp; grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    openAlbum();
                } else {
                    Toast.makeText(this, "You denied the permission", Toast.LENGTH_SHORT).show();
                }
                break;
            default:
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case TAKE_PHOTO:
                if (resultCode == RESULT_OK) {
                    try {
                        // 将拍摄的照片显示出来
                        Bitmap bitmap = BitmapFactory.decodeStream(getContentResolver().openInputStream(imageUri));
                        picture.setImageBitmap(bitmap);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                break;
            case CHOOSE_PHOTO:
                if (resultCode == RESULT_OK) {
                    // 判断手机系统版本号
                    if (Build.VERSION.SDK_INT &gt;= 19) {
                        // 4.4及以上系统使用这个方法处理图片
                        handleImageOnKitKat(data);
                    } else {
                        // 4.4以下系统使用这个方法处理图片
                        handleImageBeforeKitKat(data);
                    }
                }
                break;
            default:
                break;
        }
    }

    @TargetApi(19)
    private void handleImageOnKitKat(Intent data) {
        String imagePath = null;
        Uri uri = data.getData();
        Log.d("TAG", "handleImageOnKitKat: uri is " + uri);
        if (DocumentsContract.isDocumentUri(this, uri)) {
            // 如果是document类型的Uri，则通过document id处理
            String docId = DocumentsContract.getDocumentId(uri);
            if("com.android.providers.media.documents".equals(uri.getAuthority())) {
                String id = docId.split(":")[1]; // 解析出数字格式的id
                String selection = MediaStore.Images.Media._ID + "=" + id;
                imagePath = getImagePath(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, selection);
            } else if ("com.android.providers.downloads.documents".equals(uri.getAuthority())) {
                Uri contentUri = ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), Long.valueOf(docId));
                imagePath = getImagePath(contentUri, null);
            }
        } else if ("content".equalsIgnoreCase(uri.getScheme())) {
            // 如果是content类型的Uri，则使用普通方式处理
            imagePath = getImagePath(uri, null);
        } else if ("file".equalsIgnoreCase(uri.getScheme())) {
            // 如果是file类型的Uri，直接获取图片路径即可
            imagePath = uri.getPath();
        }
        displayImage(imagePath); // 根据图片路径显示图片
    }

    private void handleImageBeforeKitKat(Intent data) {
        Uri uri = data.getData();
        String imagePath = getImagePath(uri, null);
        displayImage(imagePath);
    }

    private String getImagePath(Uri uri, String selection) {
        String path = null;
        // 通过Uri和selection来获取真实的图片路径
        Cursor cursor = getContentResolver().query(uri, null, selection, null, null);
        if (cursor != null) {
            if (cursor.moveToFirst()) {
                path = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DATA));
            }
            cursor.close();
        }
        return path;
    }

    private void displayImage(String imagePath) {
        if (imagePath != null) {
            Bitmap bitmap = BitmapFactory.decodeFile(imagePath);
            picture.setImageBitmap(bitmap);
        } else {
            Toast.makeText(this, "failed to get image", Toast.LENGTH_SHORT).show();
        }
    }

}

</code></pre>
<p>music</p>
<ul>
<li>
<p>setDataSource() 设置要播放的音频文件的位置</p>
</li>
<li>
<p>prepare() 在开始播放之前调用这个方法完成准备工作</p>
</li>
<li>
<p>start() 开始或继续播放音频</p>
</li>
<li>
<p>pause() 暂停播放音频</p>
</li>
<li>
<p>reset() 将MediaPlayer对象重置到刚刚创建的状态</p>
</li>
<li>
<p>seekTo() 从指定的位置开始播放音频</p>
</li>
<li>
<p>stop() 停止播放音频。调用这个方法后的MediaPlayer对象无法再播放音频</p>
</li>
<li>
<p>release() 释放掉与MediaPlayer对象相关的资源</p>
</li>
<li>
<p>isPlaying() 判断当前MediaPlayer是否正在播放音频</p>
</li>
<li>
<p>getDuration() 获取载入的音频文件的时长</p>
</li>
</ul>
<pre data-syntax="java"><code class="lang-java hljs raw">public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private MediaPlayer mediaPlayer = new MediaPlayer();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button play = (Button) findViewById(R.id.play);
        Button pause = (Button) findViewById(R.id.pause);
        Button stop = (Button) findViewById(R.id.stop);
        play.setOnClickListener(this);
        pause.setOnClickListener(this);
        stop.setOnClickListener(this);
        if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(MainActivity.this, new String[]{ Manifest.permission. WRITE_EXTERNAL_STORAGE }, 1);
        } else {
            initMediaPlayer(); // 初始化MediaPlayer
        }
    }

    private void initMediaPlayer() {
        try {
            File file = new File(Environment.getExternalStorageDirectory(), "music.mp3");
            mediaPlayer.setDataSource(file.getPath()); // 指定音频文件的路径
            mediaPlayer.prepare(); // 让MediaPlayer进入到准备状态
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case 1:
                if (grantResults.length &gt; 0 &amp;&amp; grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    initMediaPlayer();
                } else {
                    Toast.makeText(this, "拒绝权限将无法使用程序", Toast.LENGTH_SHORT).show();
                    finish();
                }
                break;
            default:
        }
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.play:
                if (!mediaPlayer.isPlaying()) {
                    mediaPlayer.start(); // 开始播放
                }
                break;
            case R.id.pause:
                if (mediaPlayer.isPlaying()) {
                    mediaPlayer.pause(); // 暂停播放
                }
                break;
            case R.id.stop:
                if (mediaPlayer.isPlaying()) {
                    mediaPlayer.reset(); // 停止播放
                    initMediaPlayer();
                }
                break;
            default:
                break;
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mediaPlayer != null) {
            mediaPlayer.stop();
            mediaPlayer.release();
        }
    }
}

</code></pre>
<p>video</p>
<ul>
<li>
<p>setVideoPath() 设置要播放的视频文件的位置</p>
</li>
<li>
<p>start() 开始或继续播放视频</p>
</li>
<li>
<p>pause() 暂停播放视频</p>
</li>
<li>
<p>resume() 将视频重头开始播放</p>
</li>
<li>
<p>seekTo() 从指定的位置开始播放视频</p>
</li>
<li>
<p>isPlaying() 判断当前是否正在播放视频</p>
</li>
<li>
<p>getDuration() 获取载入的视频文件的时长</p>
</li>
</ul>
<pre data-syntax="java"><code class="lang-java hljs raw">&lt;VideoView
android:id="@+id/video_view"
android:layout_width="match_parent"
android:layout_height="wrap_content" /&gt;

</code></pre>
<p>Android确实是不允许在子线程中进行UI操作的</p>
<p>异步消息处理</p>
<p>Message	在线程之间传递的消息，它可以在内部携带少量的信 息，用于在不同线程之间交换数据</p>
<p>Handler	发送消息一般是使用Handler的sendMessage() 方法，发出的消息经过一系列地辗转处理后，最终会传递到Handler的 handleMessage() 方法中</p>
<p>MessageQueue	用于存放所有通过 Handler发送的消息。</p>
<p>Looper	每个线程中的MessageQueue的管家</p>
<ul>
<li>输入事件概览</li>
</ul>
<p>全局获取Context</p>
<pre data-syntax="java"><code class="lang-java hljs raw">public class MyApplication extends Application {
    private static Context context;
    @Override
    public void onCreate() {
        context = getApplicationContext();
    }
    public static Context getContext() {
        return context;
    }
}

// 程序启动时应该初始 化MyApplication 类，而不是默认的Application 类
&lt;application
    android:name=".MyApplication"
...&gt; ...

</code></pre>
<p>Alarm</p>
<pre data-syntax="java"><code class="lang-java hljs raw">public class LongRunningService extends Service {
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        new Thread(new Runnable() {
            @Override
            public void run() {
// 在这里执行具体的逻辑操作
            }
        }).start();
        AlarmManager manager = (AlarmManager) getSystemService(ALARM_SERVICE);
        int anHour = 60 * 60 * 1000; // 这是一小时的毫秒数
        long triggerAtTime = SystemClock.elapsedRealtime() + anHour;
        Intent i = new Intent(this, LongRunningService.class);
        PendingIntent pi = PendingIntent.getService(this, 0, i, 0);
        manager.set(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime, pi);
        return super.onStartCommand(intent, flags, startId);
    }
}


启动定时服务
Intent intent = new Intent(context, LongRunningService.class);
context.startService(intent);

</code></pre>
<p><strong>Android 的CPU类型(ABIs)</strong></p>
<p>应用程序二进制接口（Application Binary Interface）定义了二进制文件如何运行在相应的系统平台上，从使用的指令集，内存对齐到可用的系统函数库。</p>
<p>在Android 系统上，每一个CPU架构对应一个ABI</p>
<ul>
<li>
<p>mips / mips64: 极少用于手机可以忽略（谷歌已经不支持了）</p>
</li>
<li>
<p>x86 / x86_64: x86 架构的手机都会包含由 Intel 提供的称为 Houdini 的指令集动态转码工具，实现 对 arm .so 的兼容。占有率极低</p>
</li>
<li>
<p>armeabi: ARM v5，旧老版本，缺少对浮点数计算的硬件支持，在需要大量计算时有性能瓶颈</p>
</li>
<li>
<p>armeabi-v7a: ARM v7</p>
</li>
<li>
<p>arm64-v8a: 64位支持，目前主流的版本</p>
</li>
</ul>
<p>查询手机cpu命令行：</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">adb shell getprop ro.product.cpu.abi    
adb shell getprop ro.product.cpu.abilist    CPU 支持的 abi 列表

</code></pre>
<h1><a href="https://developer.android.google.cn/studio?hl=zh-cn" target="_blank">ANDROID STUDIO</a></h1>
<p><a href="https://developer.android.google.cn/studio/intro/keyboard-shortcuts?hl=zh-cn" target="_blank">键盘快捷键</a></p>
<table>
<thead>
<tr>
<th style="text-align:center">在 Studio 内导航和搜索</th>
<th style="text-align:center"></th>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">搜索全部内容（包括代码和菜单）</td>
<td style="text-align:center">按两次 Shift</td>
<td style="text-align:center">按两次 Shift</td>
</tr>
<tr>
<td style="text-align:center">查找</td>
<td style="text-align:center">Ctrl+F</td>
<td style="text-align:center">Command+F</td>
</tr>
<tr>
<td style="text-align:center">查找下一项内容</td>
<td style="text-align:center">F3</td>
<td style="text-align:center">Command+G</td>
</tr>
<tr>
<td style="text-align:center">查找上一项内容</td>
<td style="text-align:center">Shift+F3</td>
<td style="text-align:center">Command+Shift+G</td>
</tr>
<tr>
<td style="text-align:center">替换</td>
<td style="text-align:center">Ctrl+R</td>
<td style="text-align:center">Command+R</td>
</tr>
<tr>
<td style="text-align:center">查找操作</td>
<td style="text-align:center">Ctrl+Shift+A</td>
<td style="text-align:center">Command+Shift+A</td>
</tr>
<tr>
<td style="text-align:center">按符号名称搜索</td>
<td style="text-align:center">Ctrl+Alt+Shift+N</td>
<td style="text-align:center">Command+Option+O</td>
</tr>
<tr>
<td style="text-align:center">查找类</td>
<td style="text-align:center">Ctrl+N</td>
<td style="text-align:center">Command+O</td>
</tr>
<tr>
<td style="text-align:center">查找文件（而不是类）</td>
<td style="text-align:center">Ctrl+Shift+N</td>
<td style="text-align:center">Command+Shift+O</td>
</tr>
<tr>
<td style="text-align:center">在路径中查找</td>
<td style="text-align:center">Ctrl+Shift+F</td>
<td style="text-align:center">Command+Shift+F</td>
</tr>
<tr>
<td style="text-align:center">打开文件结构弹出式菜单</td>
<td style="text-align:center">Ctrl+F12</td>
<td style="text-align:center">Command+F12</td>
</tr>
<tr>
<td style="text-align:center">在打开的编辑器标签页之间导航</td>
<td style="text-align:center">Alt+向右箭头 或 向左箭头</td>
<td style="text-align:center">Ctrl+向右箭头 或 Ctrl+向左箭头</td>
</tr>
<tr>
<td style="text-align:center">跳到源代码</td>
<td style="text-align:center">F4 或 Ctrl+Enter</td>
<td style="text-align:center">F4 或 Command+向下箭头</td>
</tr>
<tr>
<td style="text-align:center">转到上一个编辑位置</td>
<td style="text-align:center">Ctrl+Shift+退格键</td>
<td style="text-align:center">Command+Shift+Delete</td>
</tr>
<tr>
<td style="text-align:center">关闭活动编辑器标签页</td>
<td style="text-align:center">Ctrl+F4</td>
<td style="text-align:center">Command+W</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">编写代码</th>
<th style="text-align:center"></th>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">生成代码（getter、setter、构造函数、hashCode/equals、toString、新文件、新类）</td>
<td style="text-align:center">Alt+Insert</td>
<td style="text-align:center">Command+N</td>
</tr>
<tr>
<td style="text-align:center">替换方法</td>
<td style="text-align:center">Ctrl+O</td>
<td style="text-align:center">Ctrl+O</td>
</tr>
<tr>
<td style="text-align:center">实现方法</td>
<td style="text-align:center">Ctrl+I</td>
<td style="text-align:center">Ctrl+I</td>
</tr>
<tr>
<td style="text-align:center">控制语句（if...else / try...catch / 等）</td>
<td style="text-align:center">Ctrl+Alt+T</td>
<td style="text-align:center">Command+Option+T</td>
</tr>
<tr>
<td style="text-align:center">删除插入符处的行</td>
<td style="text-align:center">Ctrl+Y</td>
<td style="text-align:center">Command+Delete</td>
</tr>
<tr>
<td style="text-align:center">收起/展开当前代码块</td>
<td style="text-align:center">Ctrl+减号键 或 Ctrl+加号键</td>
<td style="text-align:center">Command+减号键 或 Command+加号键</td>
</tr>
<tr>
<td style="text-align:center">收起/展开所有代码块</td>
<td style="text-align:center">Ctrl+Shift+减号键 或 Ctrl+Shift+加号键</td>
<td style="text-align:center">Command+Shift+减号键 或 Command+Shift+加号键</td>
</tr>
<tr>
<td style="text-align:center">复制当前行或选择</td>
<td style="text-align:center">Ctrl+D</td>
<td style="text-align:center">Command+D</td>
</tr>
<tr>
<td style="text-align:center">基本代码补全</td>
<td style="text-align:center">Ctrl+空格键</td>
<td style="text-align:center">Ctrl+空格键</td>
</tr>
<tr>
<td style="text-align:center">智能代码补全（按预期类型过滤方法和变量列表）</td>
<td style="text-align:center">Ctrl+Shift+空格键</td>
<td style="text-align:center">Ctrl+Shift+空格键</td>
</tr>
<tr>
<td style="text-align:center">完成语句</td>
<td style="text-align:center">Ctrl+Shift+Enter</td>
<td style="text-align:center">Command+Shift+Enter</td>
</tr>
<tr>
<td style="text-align:center">快速查找文档</td>
<td style="text-align:center">Ctrl+Q</td>
<td style="text-align:center">Ctrl+J</td>
</tr>
<tr>
<td style="text-align:center">显示选定方法的参数</td>
<td style="text-align:center">Ctrl+P</td>
<td style="text-align:center">Command+P</td>
</tr>
<tr>
<td style="text-align:center">转到声明（直接）</td>
<td style="text-align:center">Ctrl+B 或 Ctrl +点击</td>
<td style="text-align:center">Command+B 或 Command +点击</td>
</tr>
<tr>
<td style="text-align:center">转到实现</td>
<td style="text-align:center">Ctrl+Alt+B</td>
<td style="text-align:center">Command+Option+B</td>
</tr>
<tr>
<td style="text-align:center">转到超方法/超类</td>
<td style="text-align:center">Ctrl+U</td>
<td style="text-align:center">Command+U</td>
</tr>
<tr>
<td style="text-align:center">打开快速定义查找</td>
<td style="text-align:center">Ctrl+Shift+I</td>
<td style="text-align:center">Command+Y</td>
</tr>
<tr>
<td style="text-align:center">切换项目工具窗口的可见性</td>
<td style="text-align:center">Alt+1</td>
<td style="text-align:center">Command+1</td>
</tr>
<tr>
<td style="text-align:center">切换书签</td>
<td style="text-align:center">F11</td>
<td style="text-align:center">F3</td>
</tr>
<tr>
<td style="text-align:center">通过助记符切换书签</td>
<td style="text-align:center">Ctrl+F11</td>
<td style="text-align:center">Option+F3</td>
</tr>
<tr>
<td style="text-align:center">通过行注释添加注释/取消注释</td>
<td style="text-align:center">Ctrl+/</td>
<td style="text-align:center">Command+/</td>
</tr>
<tr>
<td style="text-align:center">通过块注释添加注释/取消注释</td>
<td style="text-align:center">Ctrl+Shift+/</td>
<td style="text-align:center">Command+Shift+/</td>
</tr>
<tr>
<td style="text-align:center">选择连续增加的代码块</td>
<td style="text-align:center">Ctrl+W</td>
<td style="text-align:center">Option+向上箭头</td>
</tr>
<tr>
<td style="text-align:center">将当前选择退回到上一个状态</td>
<td style="text-align:center">Ctrl+Shift+W</td>
<td style="text-align:center">Option+向下箭头</td>
</tr>
<tr>
<td style="text-align:center">移动到代码块起始位置</td>
<td style="text-align:center">Ctrl+[</td>
<td style="text-align:center">Option+Command+[</td>
</tr>
<tr>
<td style="text-align:center">移动到代码块结束位置</td>
<td style="text-align:center">Ctrl+]</td>
<td style="text-align:center">Option+Command+]</td>
</tr>
<tr>
<td style="text-align:center">从当前位置选择到代码块起始位置</td>
<td style="text-align:center">Ctrl+Shift+[</td>
<td style="text-align:center">Option+Command+Shift+[</td>
</tr>
<tr>
<td style="text-align:center">从当前位置选择到代码块结束位置</td>
<td style="text-align:center">Ctrl+Shift+]</td>
<td style="text-align:center">Option+Command+Shift+]</td>
</tr>
<tr>
<td style="text-align:center">从当前位置删除到单词结尾位置</td>
<td style="text-align:center">Ctrl+Delete</td>
<td style="text-align:center">Option+Delete</td>
</tr>
<tr>
<td style="text-align:center">从当前位置删除到单词开头位置</td>
<td style="text-align:center">Ctrl+退格键</td>
<td style="text-align:center">Option+Delete</td>
</tr>
<tr>
<td style="text-align:center">优化导入</td>
<td style="text-align:center">Ctrl+Alt+O</td>
<td style="text-align:center">Ctrl+Option+O</td>
</tr>
<tr>
<td style="text-align:center">项目快速修复（显示意图操作和快速修复）</td>
<td style="text-align:center">Alt+Enter</td>
<td style="text-align:center">Option+Enter</td>
</tr>
<tr>
<td style="text-align:center">重新格式化代码</td>
<td style="text-align:center">Ctrl+Alt+L</td>
<td style="text-align:center">Command+Option+L</td>
</tr>
<tr>
<td style="text-align:center">自动缩进行</td>
<td style="text-align:center">Ctrl+Alt+I</td>
<td style="text-align:center">Ctrl+Option+I</td>
</tr>
<tr>
<td style="text-align:center">缩进/取消缩进行</td>
<td style="text-align:center">Tab 或 Shift+Tab</td>
<td style="text-align:center">Tab 或 Shift+Tab</td>
</tr>
<tr>
<td style="text-align:center">智能行合并</td>
<td style="text-align:center">Ctrl+Shift+J</td>
<td style="text-align:center">Ctrl+Shift+J</td>
</tr>
<tr>
<td style="text-align:center">智能行拆分</td>
<td style="text-align:center">Ctrl+Enter</td>
<td style="text-align:center">Command+Enter</td>
</tr>
<tr>
<td style="text-align:center">开始新行</td>
<td style="text-align:center">Shift+Enter</td>
<td style="text-align:center">Shift+Enter</td>
</tr>
<tr>
<td style="text-align:center">下一个/上一个突出显示的错误</td>
<td style="text-align:center">F2 或 Shift+F2</td>
<td style="text-align:center">F2 或 Shift+F2</td>
</tr>
<tr>
<td style="text-align:center">编译并运行</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">编译</td>
<td style="text-align:center">Ctrl+F9</td>
<td style="text-align:center">Command+F9</td>
</tr>
<tr>
<td style="text-align:center">编译并运行</td>
<td style="text-align:center">Shift+F10</td>
<td style="text-align:center">Ctrl+R</td>
</tr>
<tr>
<td style="text-align:center">应用更改并重启 Activity</td>
<td style="text-align:center">Ctrl+F10</td>
<td style="text-align:center">Ctrl+Command+R</td>
</tr>
<tr>
<td style="text-align:center">应用代码更改</td>
<td style="text-align:center">Ctrl+Alt+F10</td>
<td style="text-align:center">Ctrl+Shift+Command+R</td>
</tr>
<tr>
<td style="text-align:center">调试</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">调试</td>
<td style="text-align:center">Shift+F9</td>
<td style="text-align:center">Ctrl+D</td>
</tr>
<tr>
<td style="text-align:center">单步执行</td>
<td style="text-align:center">F8</td>
<td style="text-align:center">F8</td>
</tr>
<tr>
<td style="text-align:center">单步进入</td>
<td style="text-align:center">F7</td>
<td style="text-align:center">F7</td>
</tr>
<tr>
<td style="text-align:center">智能单步进入</td>
<td style="text-align:center">Shift+F7</td>
<td style="text-align:center">Shift+F7</td>
</tr>
<tr>
<td style="text-align:center">单步退出</td>
<td style="text-align:center">Shift+F8</td>
<td style="text-align:center">Shift+F8</td>
</tr>
<tr>
<td style="text-align:center">运行到光标位置</td>
<td style="text-align:center">Alt+F9</td>
<td style="text-align:center">Option+F9</td>
</tr>
<tr>
<td style="text-align:center">评估表达式</td>
<td style="text-align:center">Alt+F8</td>
<td style="text-align:center">Option+F8</td>
</tr>
<tr>
<td style="text-align:center">继续运行程序</td>
<td style="text-align:center">F9</td>
<td style="text-align:center">Command+Option+R</td>
</tr>
<tr>
<td style="text-align:center">切换断点</td>
<td style="text-align:center">Ctrl+F8</td>
<td style="text-align:center">Command+F8</td>
</tr>
<tr>
<td style="text-align:center">查看断点</td>
<td style="text-align:center">Ctrl+Shift+F8</td>
<td style="text-align:center">Command+Shift+F8</td>
</tr>
</tbody>
</table>
<ol>
<li>
<p>找到项目的Gradle Scripts中的build.gradle文件，把其中的compileSdkVersion, buildToolsVersion, targetSdkVersion从31改成30 。修改之后会出现了一个提示，单击并选择sync [to version 30]。Android Studio会自动下载BuildTool V30并更改项目设置。</p>
</li>
<li>
<p>主要是SDK构建工具31上缺少2个文件</p>
</li>
</ol>
<p>1）Android\Sdk\build-tools\31.0.0目录，将d8.bat重命名为dx.bat</p>
<p>2）Android\Sdk\build-tools\31.0.0\lib目录，将d8.jar重命名为dx.jar</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">implementation fileTree(dir: 'libs', include: ['*.jar'])	本地依赖声明，表示将libs目录下所有.jar后缀的文件都添加到项目的构建路径中
implementation	远程依赖声明
testImplementation和androidTestImplementation	声明测试用例库

</code></pre>
<p><a href="https://developer.android.google.cn/guide/webapps/webview?hl=zh-cn" target="_blank">在 WebView 中开发 Web 应用</a></p>
<p>Webview调用Java方法</p>
<p>1、允许WebView加载js</p>
<p>webView.getSettings().setJavaScriptEnabled(true);</p>
<p>2、编写js接口类</p>
<p>3、给WebView添加js接口</p>
<p>webView.addJavascriptInterface(obj, name);</p>
<p>Android调用js方法</p>
<p>使用loadUrl方法调用javascript</p>
<p>webView.loadUrljavascript:jsString);</p>
<p>jsString是要调用的js代码的字符串</p>
<p>Chrome调试</p>
<p>打开允许调试的开关</p>
<p>webView.setWebContentsDebuggingEnabled(true);</p>
<p>activity_main.xml</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">&lt;?xml version="1.0" encoding="utf-8"?&gt;

&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"&gt;

    &lt;WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="450dp" /&gt;

    &lt;TextView
        android:id="@+id/appText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textColor="#cc0000"
        android:textSize="20sp"
        android:layout_marginTop="20dp"
        tools:text="apptext"/&gt;

    &lt;androidx.appcompat.widget.LinearLayoutCompat
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"&gt;

        &lt;EditText
            android:id="@+id/edittext"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:minWidth="80dp"/&gt;
        &lt;Button
            android:id="@+id/button"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="15dp"
            android:text="Send"/&gt;
    &lt;/androidx.appcompat.widget.LinearLayoutCompat&gt;

&lt;/LinearLayout&gt;

</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">public interface JSBridge {
    void setTextViewValue(String value);
}


public class JSInterface {
    private static final String TAG="JSInterface";
    private JSBridge jsBridge;

    public JSInterface(JSBridge jsBridge){
        this.jsBridge=jsBridge;
    }

    // 该方法不在主线程执行
    @JavascriptInterface
    public void setValue(String value){
        Log.d(TAG,"value ="+value);
        jsBridge.setTextViewValue(value);
    }
}


public class MainActivity extends AppCompatActivity implements JSBridge {
    private WebView mWebview;
    private TextView appText;
    private Handler mHandler;

    private Button mButton;
    private EditText mEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initWidgets(savedInstanceState);
    }

    private void initWidgets(Bundle savedInstanceState){
        mWebview = findViewById(R.id.webview);
        appText = findViewById(R.id.appText);
        mHandler = new Handler();

        mButton = findViewById(R.id.button);
        mEditText = findViewById(R.id.edittext);

        //允许webview加载JS
        mWebview.getSettings().setJavaScriptEnabled(true);
        // 给webview添加JS接口
        mWebview.addJavascriptInterface(new com.webapp1.JSInterface(this),"sendToApp");
        mWebview.loadUrl("file:///android_asset/index.html");

        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String str = mEditText.getText().toString();
                mWebview.loadUrl("javascript:receiveFromApp('"+str+"')");
            }
        });

        mWebview.setWebContentsDebuggingEnabled(true);
    }

    @Override
    public void setTextViewValue(String value) {
        mHandler.post(new Runnable() {
            @Override
            public void run() {
                appText.setText(value);
            }
        });

    }
}

</code></pre>
<p>/main/assets/index.html</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;title&gt;Webview&lt;/title&gt;
  &lt;style&gt;
    body {
      background-color: aqua;
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;h1&gt;Webview&lt;/h1&gt;

&lt;p&gt;input form&lt;/p&gt;

&lt;form id="form"&gt;
  &lt;label for="fname"&gt;First name:&lt;/label&gt;
  &lt;input type="text" id="fname" name="fname"&gt;&lt;br&gt;&lt;br&gt;
  &lt;input type="submit" id="btn" value="提交"&gt;
&lt;/form&gt;

&lt;script&gt;
    let fname = document.getElementById('fname');
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () =&gt; {
      let str = fname.value;
      if (window.sendToApp) {
        sendToApp.setValue(str);
      }
    });
    let receiveFromApp = function (str) {
      fname.value = str;
    }
  &lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;

</code></pre>
<h1>Android SDK</h1>
<p><strong>配置环境变量</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">变量名：ANDROID_HOME
变量值：D:\android-sdk-windows //SDK的实际安装路径

变量名：Path
变量值：%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools

</code></pre>
<h2>命令行工具 cmdline-tools</h2>
<h3><a href="https://developer.android.google.cn/studio/command-line/apkanalyzer?hl=zh-cn" target="_blank">apkanalyzer</a></h3>
<p>用于在构建流程完成后深入分析您的 APK 组成。</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">apkanalyzer [--human-readable] subject verb [options] apk-file [apk-file2]

</code></pre>
<p>subject 查询的内容</p>
<ul>
<li>
<p>apk：分析 APK 文件属性，如应用 ID、版本代码和版本名称。</p>
</li>
<li>
<p>files：分析 APK 文件内的文件。</p>
</li>
<li>
<p>manifest：分析 APK 文件内的清单的内容。</p>
</li>
<li>
<p>dex：分析 APK 文件内的 DEX 文件。</p>
</li>
<li>
<p>resources：查看文本、图像和字符串资源。</p>
</li>
</ul>
<p>verb</p>
<table>
<thead>
<tr>
<th style="text-align:center">查看 APK 文件属性</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">apk summary apk-file</td>
<td style="text-align:center">输出应用 ID、版本代码和版本名称。</td>
</tr>
<tr>
<td style="text-align:center">apk file-size apk-file</td>
<td style="text-align:center">输出 APK 的总文件大小。</td>
</tr>
<tr>
<td style="text-align:center">apk download-size apk-file</td>
<td style="text-align:center">输出 APK 的下载大小估计值。</td>
</tr>
<tr>
<td style="text-align:center">apk features [--not-required] apk-file</td>
<td style="text-align:center">输出 APK 用来触发 <a href="https://developer.android.google.cn/google/play/filters?hl=zh-cn#manifest-filters" target="_blank">Play 商店过滤的</a>功能</td>
</tr>
<tr>
<td style="text-align:center">apk compare [options] apk-file apk-file2</td>
<td style="text-align:center">比较 apk-file 和 apk-file2 的大小</td>
</tr>
<tr>
<td style="text-align:center">查看 APK 文件系统</td>
<td style="text-align:center">说明</td>
</tr>
<tr>
<td style="text-align:center">files list apk-file</td>
<td style="text-align:center">列出 APK 中的所有文件</td>
</tr>
<tr>
<td style="text-align:center">files cat --file path apk-file</td>
<td style="text-align:center">输出文件内容</td>
</tr>
<tr>
<td style="text-align:center">查看清单中的信息</td>
<td style="text-align:center">说明</td>
</tr>
<tr>
<td style="text-align:center">manifest print apk-file</td>
<td style="text-align:center">以 XML 格式输出 APK 清单。</td>
</tr>
<tr>
<td style="text-align:center">manifest application-id apk-file</td>
<td style="text-align:center">输出应用 ID 值。</td>
</tr>
<tr>
<td style="text-align:center">manifest version-name apk-file</td>
<td style="text-align:center">输出版本名称值。</td>
</tr>
<tr>
<td style="text-align:center">manifest version-code apk-file</td>
<td style="text-align:center">输出版本代码值。</td>
</tr>
<tr>
<td style="text-align:center">manifest min-sdk apk-file</td>
<td style="text-align:center">输出最低 SDK 版本。</td>
</tr>
<tr>
<td style="text-align:center">manifest target-sdk apk-file</td>
<td style="text-align:center">输出目标 SDK 版本。</td>
</tr>
<tr>
<td style="text-align:center">manifest permissions apk-file</td>
<td style="text-align:center">输出权限列表。</td>
</tr>
<tr>
<td style="text-align:center">manifest debuggable apk-file</td>
<td style="text-align:center">输出应用是否可调试。</td>
</tr>
<tr>
<td style="text-align:center">访问 DEX 文件信息</td>
<td style="text-align:center">说明</td>
</tr>
<tr>
<td style="text-align:center">dex list apk-file</td>
<td style="text-align:center">输出 APK 中的 DEX 文件列表。</td>
</tr>
<tr>
<td style="text-align:center">dex references [--files path] [--files path2] apk-file</td>
<td style="text-align:center">输出指定 DEX 文件中的方法引用数</td>
</tr>
</tbody>
</table>
<h3><a href="https://developer.android.google.cn/studio/command-line/avdmanager?hl=zh-cn" target="_blank">avdmanager</a></h3>
<p>创建和管理 Android 虚拟设备 (AVD)。</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">avdmanager [global options] command [command options]

</code></pre>
<p>全局选项</p>
<ul>
<li>
<p>-s 	静默模式：仅输出错误</p>
</li>
<li>
<p>-h 	使用帮助</p>
</li>
<li>
<p>-v 	详细模式：输出错误、警告和参考性消息。</p>
</li>
</ul>
<h3><a href="https://developer.android.google.cn/studio/command-line/sdkmanager?hl=zh-cn" target="_blank">sdkmanager</a></h3>
<p>查看、安装、更新和卸载 Android SDK 的软件包。</p>
<p><strong>列出已安装和可用的软件包</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">sdkmanager --list [options] \
           [--channel=channel_id] // Channels: 0 (stable), 1 (beta), 2 (dev), or 3 (canary)

</code></pre>
<p><strong>安装软件包</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">sdkmanager packages [options]

</code></pre>
<p><strong>更新所有已安装的软件包</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">sdkmanager --update [options]

</code></pre>
<h3><a href="https://developer.android.google.cn/studio/run/emulator-commandline?hl=zh-cn" target="_blank">Emulator</a></h3>
<p><strong>emulator -help-datadir</strong></p>
<p>系统目录：包含模拟器用于模拟操作系统的 Android 系统映像</p>
<p>Android/sdk/system-images/android-<strong>apiLevel</strong>/variant/arch/</p>
<p>AVD 数据目录（内容目录）特定于单个 AVD 实例，包含 AVD 的所有可修改数据</p>
<p>~/.android/avd/<strong>name</strong>.avd/</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">emulator -avd avd_name [ {-option [value]} … ]

</code></pre>
<p>emulator -list-avds</p>
<table>
<thead>
<tr>
<th style="text-align:center">快速启动</th>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-no-snapshot-load</td>
<td style="text-align:center">执行冷启动，并在退出时保存模拟器状态。</td>
</tr>
<tr>
<td style="text-align:center">-no-snapshot-save</td>
<td style="text-align:center">如果可能，执行快速启动，但在退出时不保存模拟器状态。</td>
</tr>
<tr>
<td style="text-align:center">-no-snapshot</td>
<td style="text-align:center">彻底停用<a href="https://developer.android.google.cn/studio/run/emulator?hl=zh-cn#quickboot" target="_blank">快速启动功</a>能 - 它不会加载或保存模拟器状态。</td>
</tr>
<tr>
<td style="text-align:center">磁盘映像和内存</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-memory size</td>
<td style="text-align:center">指定物理 RAM 大小，范围为 128 MB - 4096 MB</td>
</tr>
<tr>
<td style="text-align:center">-sdcard filepath</td>
<td style="text-align:center">指定 SD 卡分区映像文件的文件名和路径</td>
</tr>
<tr>
<td style="text-align:center">-wipe-data</td>
<td style="text-align:center">删除用户数据并从初始数据文件中复制数据。</td>
</tr>
<tr>
<td style="text-align:center">网络</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-dns-server servers</td>
<td style="text-align:center">使用指定的 DNS 服务器</td>
</tr>
<tr>
<td style="text-align:center">-http-proxy proxy</td>
<td style="text-align:center">通过指定的 HTTP/HTTPS 代理进行所有 TCP 连接</td>
</tr>
</tbody>
</table>
<p>-net<strong>speed</strong> delay / speed</p>
<p>将网络延迟模拟设置为以下 <strong>delay</strong> 值之一（以毫秒为单位）：</p>
<ul>
<li>
<p>gsm - GSM/CSD（最小值 150，最大值 550）。</p>
</li>
<li>
<p>hscsd - HSCSD（最小值 80，最大值 400）。</p>
</li>
<li>
<p>gprs - GPRS（最小值 35，最大值 200）。</p>
</li>
<li>
<p>edge - EDGE/EGPRS（最小值 80，最大值 400）。</p>
</li>
<li>
<p>umts - UMTS/3G（最小值 35，最大值 200）。</p>
</li>
<li>
<p>hsdpa - HSDPA（最小值 0，最大值 0）。</p>
</li>
<li>
<p>lte - LTE（最小值 0，最大值 0）。</p>
</li>
<li>
<p>evdo - EVDO（最小值 0，最大值 0）。</p>
</li>
<li>
<p>none - 无延迟时间，默认值（最小值 0，最大值 0）。</p>
</li>
<li>
<p>num - 指定确切的延迟时间。</p>
</li>
<li>
<p>min:max - 分别指定最小延迟时间和最大延迟时间。</p>
</li>
</ul>
<p>设置网络速度模拟。使用以下 <strong>speed</strong> 值（以 kbps 为单位）之一，指定最大网络上传和下载速度：</p>
<ul>
<li>
<p>gsm - GSM/CSD（上传：14.4，下载：14.4）。</p>
</li>
<li>
<p>hscsd - HSCSD（上传：14.4，下载：57.6）。</p>
</li>
<li>
<p>gprs - GPRS（上传：28.8，下载：57.6）。</p>
</li>
<li>
<p>edge - EDGE/EGPRS（上传：473.6，下载：473.6）。</p>
</li>
<li>
<p>umts - UMTS/3G（上传：384.0，下载：384.0）。</p>
</li>
<li>
<p>hsdpa - HSDPA（上传：5760.0，下载：13,980.0）。</p>
</li>
<li>
<p>lte - LTE（上传：58,000，下载：173,000）。</p>
</li>
<li>
<p>evdo - EVDO（上传：75,000，下载：280,000）。</p>
</li>
<li>
<p>full - 无限制，默认值（上传：0.0，下载：0.0）。</p>
</li>
<li>
<p>num - 指定上传和下载速度。</p>
</li>
<li>
<p>up:down - 分别指定上传速度和下载速度。</p>
</li>
</ul>
<h2>构建工具 build-tools</h2>
<h3><a href="https://developer.android.google.cn/studio/command-line/aapt2?hl=zh-cn" target="_blank">aapt2</a> (Android Asset Packaging Tool)</h3>
<p>解析 Android 资源，为其编制索引，然后将其编译为针对 Android 平台优化过的二进制格式，最后将编译后的资源打包到单个输出中。</p>
<p>增量编译</p>
<ul>
<li>编译：将资源文件编译为二进制格式。</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">aapt2 compile path-to-input-files [options] -o output-directory/

</code></pre>
<ul>
<li>链接：合并所有已编译的文件并将它们打包到一个软件包中。</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">aapt2 link path-to-input-files [options] -o outputdirectory/outputfilename.apk --manifest AndroidManifest.xml

</code></pre>
<p>转储</p>
<p>aapt2 dump sub-command filename.apk [options]</p>
<table>
<thead>
<tr>
<th style="text-align:center">子命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">apc</td>
<td style="text-align:center">输出在编译期间生成的 AAPT2 容器（APC）的内容。</td>
</tr>
<tr>
<td style="text-align:center">badging</td>
<td style="text-align:center">输出从 APK 的清单中提取的信息。</td>
</tr>
<tr>
<td style="text-align:center">configurations</td>
<td style="text-align:center">输出 APK 中的资源使用的每项配置。</td>
</tr>
<tr>
<td style="text-align:center">packagename</td>
<td style="text-align:center">输出 APK 的软件包名称。</td>
</tr>
<tr>
<td style="text-align:center">permissions</td>
<td style="text-align:center">输出从 APK 的清单提取的权限。</td>
</tr>
<tr>
<td style="text-align:center">strings</td>
<td style="text-align:center">输出 APK 的资源表字符串池的内容。</td>
</tr>
<tr>
<td style="text-align:center">styleparents</td>
<td style="text-align:center">输出 APK 中使用的样式的父项。</td>
</tr>
<tr>
<td style="text-align:center">resources</td>
<td style="text-align:center">输出 APK 的资源表的内容。</td>
</tr>
<tr>
<td style="text-align:center">xmlstrings</td>
<td style="text-align:center">输出 APK 的已编译 xml 中的字符串。</td>
</tr>
<tr>
<td style="text-align:center">xmltree</td>
<td style="text-align:center">输出 APK 的已编译 xml 树。</td>
</tr>
</tbody>
</table>
<p><strong>appt</strong></p>
<p>查看，创建， 更新ZIP格式的文档附件(zip, jar, apk)，也可将资源文件编译成<a href="https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6/996661" target="_blank">二进制文件</a>，即Android资源打包工具</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># 查看apk包的packageName、versionCode、applicationLabel、launcherActivity、permission等各种详细信息
aapt dump badging &lt;xxx.apk&gt; 
# 查看权限
aapt dump permissions &lt;file_path.apk&gt;
# 列出压缩文件(zip,jar,apk)中的目录内容
aapt list [-v] [-a] file.{zip,jar,apk}
# 从压缩文件中删除文件
aapt remove [-v] file.{zip,jar,apk} file1 [file2 ...]
# 往压缩文件中添加文件
aapt add [-v] file.{zip,jar,apk} file1 [file2 ...]

</code></pre>
<h3><a href="https://developer.android.google.cn/studio/command-line/apksigner?hl=zh-cn" target="_blank">apksigner</a></h3>
<p>为 APK 签名，并检查签名能否在给定 APK 支持的所有平台版本上成功通过验证。</p>
<p><strong>为 APK 签名</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">apksigner sign --ks keystore.jks |
  --key key.pk8 --cert cert.x509.pem
  [signer_options] app-name.apk

</code></pre>
<p><strong>验证 APK 签名</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">apksigner verify [options] app-name.apk

</code></pre>
<p><a href="https://developer.android.google.cn/studio/command-line/zipalign?hl=zh-cn" target="_blank">zipalign</a></p>
<p>确保所有未压缩数据的开头均相对于文件开头部分执行特定的对齐，从而优化 APK 文件。</p>
<h2>平台工具 platform-tools</h2>
<h3><a href="https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn" target="_blank">adb</a></h3>
<p>安卓调试桥 (Android Debug Bridge)：一个通用命令行工具，其允许您与模拟器实例或连接的 Android 设备进行通信</p>
<p>组件：</p>
<ul>
<li>
<p>客户端：用于发送命令。客户端在开发机器上运行。您可以通过发出 adb 命令从命令行终端调用客户端。</p>
</li>
<li>
<p>守护程序 (adbd)：用于在设备上运行命令。守护程序在每个设备上作为后台进程运行。</p>
</li>
<li>
<p>服务器：用于管理客户端与守护程序之间的通信。服务器在开发机器上作为后台进程运行。</p>
</li>
</ul>
<p>运行原理：PC 端的 adb server 与手机端的守护进程 adbd 建立连接，然后 PC 端的 adb client 通过端口 5037与 adb server通信（转发指令），，adbd 接收命令后解析运行。</p>
<p><strong>启用 adb 调试</strong></p>
<ul>
<li>USB 连接</li>
</ul>
<ol>
<li>
<p>显示开发者选项：转到设置 &gt; 关于手机，然后点按 build（软件版本）号七次。。</p>
</li>
<li>
<p>返回上一屏幕，在底部可以找到开发者选项，启用 USB 调试</p>
<ul>
<li>使用WiFi连接</li>
</ul>
</li>
</ol>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># 监听端口 5555 上的 TCP/IP 连接，后续可拔掉连接目标设备的 USB 线
adb tcpip 5555  
#通过 IP 地址连接到设备
adb connect &lt;ip:port&gt;
adb disconnect &lt;device-ip-address&gt;

# root时，在设备的的终端模拟器输入
su setprop service.adb.tcp.port 5555

</code></pre>
<ul>
<li>WLAN 连接	Android 11（及更高版本）</li>
</ul>
<ol>
<li>
<p>启用开发者选项下的无线调试选项。</p>
</li>
<li>
<p>选择使用配对码配对设备。记下设备上显示的配对码、IP 地址和端口号</p>
</li>
<li>
<p>运行 adb pair ipaddr:port</p>
</li>
<li>
<p>当系统提示时，输入您在第 3 步中获得的配对码。系统会显示一条消息，表明您的设备已成功配对。</p>
</li>
<li>
<p>运行 adb connect <a>ip:port</a></p>
</li>
</ol>
<h4>基础指令</h4>
<p>将命令发送至特定设备</p>
<p><strong>adb [-d|-e|-s ] </strong></p>
<ul>
<li>
<p>-d 指定当前唯一通过USB 连接的Android 设备为命令目标</p>
</li>
<li>
<p>-e 指定当前唯一运行的模拟器为命令目标</p>
</li>
<li>
<p>-s  指定相应serialNumber 号的设备/模拟器为命令目标</p>
</li>
<li>
<p>command 为所需对设备执行的命令</p>
</li>
</ul>
<p>adb version	adb 版本信息</p>
<p><strong>adb devices [-l]</strong>	adb 连接设备</p>
<p>adb start-server</p>
<p>adb kill-server</p>
<p>指定adb server 的网络端口port （默认5037）启动服务</p>
<p>adb -P  start-server</p>
<p><strong>文件传输</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb push &lt;local&gt; &lt;remote&gt; #从本地复制文件到设备
adb pull &lt;remote&gt; &lt;local&gt; #从设备复制文件到本地

</code></pre>
<p>截屏录屏</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb exec-out screencap -p &gt; sc.png	截屏到电脑
adb shell screencap /sdcard/screen.png	截屏
adb shell screenrecord /sdcard/demo.mp4	录屏

</code></pre>
<p>音频不与视频文件一起录制，Ctrl + C 停止</p>
<table>
<thead>
<tr>
<th style="text-align:center">选项</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">--size widthxheight</td>
<td style="text-align:center">设置视频大小：1280x720</td>
</tr>
<tr>
<td style="text-align:center">--bit-rate rate</td>
<td style="text-align:center">设置视频的视频比特率（以 MB/秒为单位）。默认值为 4Mbps</td>
</tr>
<tr>
<td style="text-align:center">--time-limit time</td>
<td style="text-align:center">设置最大录制时长（以秒为单位）。默认值和最大值均为 180（3 分钟）。</td>
</tr>
<tr>
<td style="text-align:center">--rotate</td>
<td style="text-align:center">将输出旋转 90 度。此功能处于实验阶段。</td>
</tr>
<tr>
<td style="text-align:center">--verbose</td>
<td style="text-align:center">在命令行屏幕显示日志信息。</td>
</tr>
</tbody>
</table>
<p>启动</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb reboot	重启
adb reboot bootloader	重启手机到fastboot模式
adb reboot recovery 重启手机到recovery模式

</code></pre>
<p>SD卡的路径 /mnt/sdcard/</p>
<h4>系统属性</h4>
<p>adb get-serialno	获取序列号</p>
<p>adb shell cat /sys/class/net/wlan0/address	MAC地址</p>
<p>adb shell cat /proc/cpuinfo	CPU信息</p>
<p>adb shell settings get secure android_id</p>
<p><strong>Window manager</strong></p>
<p>wm command</p>
<p>size [reset|WxH|WdpxHdp]	屏幕分辨率</p>
<p>density [reset|DENSITY]	屏幕密度</p>
<p>overscan [reset|LEFT,TOP,RIGHT,BOTTOM]</p>
<p>scaling [off|auto]</p>
<p>dismiss-keyguard</p>
<p>adb shell getprop [属性名]    List  Android system property,</p>
<table>
<thead>
<tr>
<th style="text-align:center">属性名</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">ro.build.version.sdk</td>
<td style="text-align:center">SDK 版本</td>
</tr>
<tr>
<td style="text-align:center">ro.build.version.release</td>
<td style="text-align:center">Android 系统版本</td>
</tr>
<tr>
<td style="text-align:center">ro.build.version.security_patch</td>
<td style="text-align:center">Android 安全补丁程序级别</td>
</tr>
<tr>
<td style="text-align:center">ro.product.model</td>
<td style="text-align:center">型号</td>
</tr>
<tr>
<td style="text-align:center">ro.product.brand</td>
<td style="text-align:center">品牌</td>
</tr>
<tr>
<td style="text-align:center">ro.product.name</td>
<td style="text-align:center">设备名</td>
</tr>
<tr>
<td style="text-align:center">ro.product.board</td>
<td style="text-align:center">处理器型号</td>
</tr>
<tr>
<td style="text-align:center">ro.product.cpu.abi</td>
<td style="text-align:center">CPU类型(ABI)</td>
</tr>
<tr>
<td style="text-align:center">ro.product.cpu.abilist</td>
<td style="text-align:center">CPU 支持的 abi 列表</td>
</tr>
<tr>
<td style="text-align:center">persist.sys.isUsbOtgEnabled</td>
<td style="text-align:center">是否支持 OTG</td>
</tr>
<tr>
<td style="text-align:center">dalvik.vm.heapsize</td>
<td style="text-align:center">每个应用程序的内存上限</td>
</tr>
<tr>
<td style="text-align:center">ro.sf.lcd_density</td>
<td style="text-align:center">屏幕密度</td>
</tr>
</tbody>
</table>
<p><strong><a href="https://developer.android.google.cn/studio/command-line/dumpsys?hl=zh-cn" target="_blank">dumpsys</a></strong></p>
<p>一种在 Android 设备上运行的工具，可提供有关系统服务的信息。</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb shell dumpsys [-t timeout] [--help | -l | --skip services | service [arguments] | -c | -h]

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">选项</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-t timeout</td>
<td style="text-align:center">指定超时期限（秒）。如果未指定，默认值为 10 秒。</td>
</tr>
<tr>
<td style="text-align:center">--help</td>
<td style="text-align:center">输出 dumpsys 工具的帮助文本。</td>
</tr>
<tr>
<td style="text-align:center">-l</td>
<td style="text-align:center">输出可与 dumpsys 配合使用的系统服务的完整列表。</td>
</tr>
<tr>
<td style="text-align:center">--skip services</td>
<td style="text-align:center">指定您不希望包含在输出中的 services。</td>
</tr>
<tr>
<td style="text-align:center">service [arguments]</td>
<td style="text-align:center">指定您希望输出的 service。某些服务可能允许您传递可选 arguments。</td>
</tr>
<tr>
<td style="text-align:center">-c</td>
<td style="text-align:center">指定某些服务时，附加此选项能以计算机可读的格式输出数据。</td>
</tr>
<tr>
<td style="text-align:center">-h</td>
<td style="text-align:center">对于某些服务，附加此选项可查看该服务的帮助文本和其他选项。</td>
</tr>
</tbody>
</table>
<p><strong>测试界面性能</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb shell dumpsys gfxinfo package-name framestats

</code></pre>
<p><strong>检查网络诊断信息</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb shell dumpsys netstats detail

adb shell dumpsys package com.example.myapp | grep userId

</code></pre>
<p><strong>查看内存分配</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">获取过去三小时内应用的内存占用情况统计信息
adb shell dumpsys procstats --hours 3
应用内存在不同类型的 RAM 分配之间的划分情况：
adb shell dumpsys meminfo package_name|pid [-d]

</code></pre>
<p>adb shell service list</p>
<table>
<thead>
<tr>
<th style="text-align:center">服务</th>
<th style="text-align:center">类名</th>
<th style="text-align:center">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">activity</td>
<td style="text-align:center">ActivityManagerService</td>
<td style="text-align:center">AMS相关信息</td>
</tr>
<tr>
<td style="text-align:center">package</td>
<td style="text-align:center">PackageManagerService</td>
<td style="text-align:center">PMS相关信息</td>
</tr>
<tr>
<td style="text-align:center">window</td>
<td style="text-align:center">WindowManagerService</td>
<td style="text-align:center">WMS相关信息</td>
</tr>
<tr>
<td style="text-align:center">input</td>
<td style="text-align:center">InputManagerService</td>
<td style="text-align:center">IMS相关信息</td>
</tr>
<tr>
<td style="text-align:center">power</td>
<td style="text-align:center">PowerManagerService</td>
<td style="text-align:center">PMS相关信息</td>
</tr>
<tr>
<td style="text-align:center">procstats</td>
<td style="text-align:center">ProcessStatsService</td>
<td style="text-align:center">进程统计</td>
</tr>
<tr>
<td style="text-align:center">battery</td>
<td style="text-align:center">BatteryService</td>
<td style="text-align:center">电池信息</td>
</tr>
<tr>
<td style="text-align:center">alarm</td>
<td style="text-align:center">AlarmManagerService</td>
<td style="text-align:center">闹钟信息</td>
</tr>
<tr>
<td style="text-align:center">meminfo</td>
<td style="text-align:center">MemBinder</td>
<td style="text-align:center">内存</td>
</tr>
<tr>
<td style="text-align:center">**adb shell dumpsys window windows</td>
<td style="text-align:center">findstr mFocusedApp	**获取当前包名和启动名</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h4>应用管理</h4>
<p>adb install [-lrtsdg] </p>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-l</td>
<td style="text-align:center">将应用安装到保护目录 /mnt/asec</td>
</tr>
<tr>
<td style="text-align:center">-r</td>
<td style="text-align:center">允许覆盖安装</td>
</tr>
<tr>
<td style="text-align:center">-t</td>
<td style="text-align:center">允许安装 AndroidManifest.xml 里 application 指定 android:testOnly="true" 的应用</td>
</tr>
<tr>
<td style="text-align:center">-s</td>
<td style="text-align:center">将应用安装到 sdcard</td>
</tr>
<tr>
<td style="text-align:center">-d</td>
<td style="text-align:center">允许降级覆盖安装</td>
</tr>
<tr>
<td style="text-align:center">-g</td>
<td style="text-align:center">授予所有运行时权限</td>
</tr>
</tbody>
</table>
<p>adb uninstall [-k] </p>
<p>k：卸载应用但保留数据和缓存目录</p>
<p><strong>package manager (pm)</strong></p>
<p>adb shell pm command</p>
<ul>
<li>
<p>list packages [options] filter	输出所有软件包</p>
</li>
<li>
<p>-f 显示应用关联的 apk 文件</p>
</li>
<li>
<p>-d 只显示 disabled 的应用</p>
</li>
<li>
<p>-e 只显示 enabled 的应用</p>
</li>
<li>
<p>-s 只显示系统应用</p>
</li>
<li>
<p>-3 只显示第三方应用</p>
</li>
<li>
<p>-i 显示应用的 installer</p>
</li>
<li>
<p>-u 包含已卸载应用</p>
</li>
<li>
<p> 包名包含  字符串</p>
</li>
<li>
<p>list permission-groups	输出所有已知的权限组。</p>
</li>
<li>
<p>-g：按组进行整理。</p>
</li>
<li>
<p>-f：输出所有信息。</p>
</li>
<li>
<p>-s：简短摘要。</p>
</li>
<li>
<p>-d：仅列出危险权限。</p>
</li>
<li>
<p>-u：仅列出用户将看到的权限。</p>
</li>
<li>
<p>list permissions [options] group	输出所有已知的权限</p>
</li>
<li>
<p>list instrumentation [options]	列出所有测试软件包</p>
</li>
<li>
<p>list features	输出系统的所有功能。</p>
</li>
<li>
<p>list libraries	输出当前设备支持的所有库。</p>
</li>
<li>
<p>list users	输出系统中的所有用户。</p>
</li>
<li>
<p>path package	输出给定 package 的 APK 的路径。</p>
</li>
<li>
<p>install [options] path	将软件包（通过 path 指定）安装到系统</p>
</li>
<li>
<p>uninstall [options] package	从系统中移除软件包。</p>
</li>
<li>
<p>clear package	删除与软件包关联的所有数据。</p>
</li>
<li>
<p>enable package_or_component	启用给定的软件包或组件</p>
</li>
<li>
<p>disable package_or_component	停用给定的软件包或组件</p>
</li>
<li>
<p>disable-user [options] package_or_component</p>
</li>
<li>
<p>grant package_name permission	向应用授予权限</p>
</li>
<li>
<p>revoke package_name permission	从应用撤消权限</p>
</li>
<li>
<p>set-install-location location	更改默认安装位置</p>
</li>
<li>
<p>0 [auto]：让系统决定最合适的位置</p>
</li>
<li>
<p>1 [internal]：在内部设备存储上安装</p>
</li>
<li>
<p>2 [external]：在外部介质上安装</p>
</li>
<li>
<p>get-install-location 返回当前安装位置</p>
</li>
<li>
<p>set-permission-enforced permission [true | false] 	是否应强制执行指定权限。</p>
</li>
<li>
<p>trim-caches desired_free_space	减少缓存文件以达到给定的可用空间。</p>
</li>
<li>
<p>create-user user_name	创建具有给定 user_name 的新用户，从而输出该用户的新用户标识符。</p>
</li>
<li>
<p>remove-user user_id	移除具有给定 user_id 的用户，从而删除与该用户关联的所有数据。</p>
</li>
<li>
<p>get-max-users	输出设备支持的最大用户数。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">command</th>
<th style="text-align:center">用途</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">list packages [options] filter</td>
<td style="text-align:center">输出所有软件包</td>
</tr>
<tr>
<td style="text-align:center">list permission-groups</td>
<td style="text-align:center">输出所有已知的权限组。</td>
</tr>
<tr>
<td style="text-align:center">list permissions [options] group</td>
<td style="text-align:center">输出所有已知的权限</td>
</tr>
<tr>
<td style="text-align:center">list instrumentation [options]</td>
<td style="text-align:center">列出所有测试软件包</td>
</tr>
<tr>
<td style="text-align:center">list features</td>
<td style="text-align:center">输出系统的所有功能。</td>
</tr>
<tr>
<td style="text-align:center">list libraries</td>
<td style="text-align:center">输出当前设备支持的所有库。</td>
</tr>
<tr>
<td style="text-align:center">list users</td>
<td style="text-align:center">输出系统中的所有用户。</td>
</tr>
<tr>
<td style="text-align:center">path package</td>
<td style="text-align:center">输出给定 package 的 APK 的路径。</td>
</tr>
<tr>
<td style="text-align:center">install [options] path</td>
<td style="text-align:center">将软件包（通过 path 指定）安装到系统</td>
</tr>
<tr>
<td style="text-align:center">uninstall [options] package</td>
<td style="text-align:center">从系统中移除软件包。</td>
</tr>
<tr>
<td style="text-align:center">clear package</td>
<td style="text-align:center">删除与软件包关联的所有数据。</td>
</tr>
<tr>
<td style="text-align:center">enable package_or_component</td>
<td style="text-align:center">启用给定的软件包或组件</td>
</tr>
<tr>
<td style="text-align:center">disable package_or_component</td>
<td style="text-align:center">停用给定的软件包或组件</td>
</tr>
<tr>
<td style="text-align:center">disable-user [options] package_or_component</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">grant package_name permission</td>
<td style="text-align:center">向应用授予权限</td>
</tr>
<tr>
<td style="text-align:center">revoke package_name permission</td>
<td style="text-align:center">从应用撤消权限</td>
</tr>
<tr>
<td style="text-align:center">set-install-location location</td>
<td style="text-align:center">更改默认安装位置</td>
</tr>
<tr>
<td style="text-align:center">get-install-location</td>
<td style="text-align:center">返回当前安装位置。返回值如下： 0 [auto]：让系统决定最合适的位置 1 [internal]：在内部设备存储上安装 2 [external]：在外部介质上安装</td>
</tr>
<tr>
<td style="text-align:center">set-permission-enforced permission [true</td>
<td style="text-align:center">false]</td>
</tr>
<tr>
<td style="text-align:center">trim-caches desired_free_space</td>
<td style="text-align:center">减少缓存文件以达到给定的可用空间。</td>
</tr>
<tr>
<td style="text-align:center">create-user user_name</td>
<td style="text-align:center">创建具有给定 user_name 的新用户，从而输出该用户的新用户标识符。</td>
</tr>
<tr>
<td style="text-align:center">remove-user user_id</td>
<td style="text-align:center">移除具有给定 user_id 的用户，从而删除与该用户关联的所有数据。</td>
</tr>
<tr>
<td style="text-align:center">get-max-users</td>
<td style="text-align:center">输出设备支持的最大用户数。</td>
</tr>
</tbody>
</table>
<p>adb shell pm list packages [option] [--user USER_ID] [FILTER]</p>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">显示列表</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">无</td>
<td style="text-align:center">所有应用</td>
</tr>
<tr>
<td style="text-align:center">-f</td>
<td style="text-align:center">显示应用关联的 apk 文件</td>
</tr>
<tr>
<td style="text-align:center">-d</td>
<td style="text-align:center">只显示 disabled 的应用</td>
</tr>
<tr>
<td style="text-align:center">-e</td>
<td style="text-align:center">只显示 enabled 的应用</td>
</tr>
<tr>
<td style="text-align:center">-s</td>
<td style="text-align:center">只显示系统应用</td>
</tr>
<tr>
<td style="text-align:center">-3</td>
<td style="text-align:center">只显示第三方应用</td>
</tr>
<tr>
<td style="text-align:center">-i</td>
<td style="text-align:center">显示应用的 installer</td>
</tr>
<tr>
<td style="text-align:center">-u</td>
<td style="text-align:center">包含已卸载应用</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">包名包含  字符串</td>
</tr>
</tbody>
</table>
<p><strong>activity manager (am)</strong></p>
<p>adb shell am [subcommand] [options]</p>
<table>
<thead>
<tr>
<th style="text-align:center">command</th>
<th style="text-align:center">用途</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">start [options] </td>
<td style="text-align:center">启动  指定的 Activity</td>
</tr>
<tr>
<td style="text-align:center">startservice [options] </td>
<td style="text-align:center">启动  指定的 Service</td>
</tr>
<tr>
<td style="text-align:center">stopservice</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">broadcast [options] </td>
<td style="text-align:center">发送  指定的广播</td>
</tr>
<tr>
<td style="text-align:center">force-stop </td>
<td style="text-align:center">停止  相关的进程</td>
</tr>
<tr>
<td style="text-align:center">kill [options] package</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">kill-all</td>
<td style="text-align:center">终止所有后台进程</td>
</tr>
<tr>
<td style="text-align:center">instrument [options] component</td>
<td style="text-align:center">使用 <a href="https://developer.android.google.cn/reference/android/app/Instrumentation?hl=zh-cn" target="_blank">Instrumentation </a>实例启动监控</td>
</tr>
<tr>
<td style="text-align:center">profile start process file</td>
<td style="text-align:center">启动 process 的性能剖析器，将结果写入 file。</td>
</tr>
<tr>
<td style="text-align:center">profile stop process</td>
<td style="text-align:center">停止 process 的性能剖析器。</td>
</tr>
<tr>
<td style="text-align:center">dumpheap [options] process file</td>
<td style="text-align:center">转储 process 的堆，写入 file。</td>
</tr>
<tr>
<td style="text-align:center">set-debug-app [options] package</td>
<td style="text-align:center">设置要调试的应用 package。</td>
</tr>
<tr>
<td style="text-align:center">clear-debug-app</td>
<td style="text-align:center">清除之前使用 set-debug-app 设置的待调试软件包。</td>
</tr>
<tr>
<td style="text-align:center">monitor [options]</td>
<td style="text-align:center">开始监控崩溃或 ANR。</td>
</tr>
<tr>
<td style="text-align:center">screen-compat {on</td>
<td style="text-align:center">off} package</td>
</tr>
<tr>
<td style="text-align:center">display-size [reset</td>
<td style="text-align:center">widthxheight]</td>
</tr>
<tr>
<td style="text-align:center">display-density dpi</td>
<td style="text-align:center">替换设备显示密度。此命令支持使用低密度屏幕在高密度屏幕环境上进行测试（反之亦然）</td>
</tr>
<tr>
<td style="text-align:center">to-uri intent</td>
<td style="text-align:center">以 URI 的形式输出给定的 intent 规范</td>
</tr>
<tr>
<td style="text-align:center">to-intent-uri intent</td>
<td style="text-align:center">以 intent: URI 的形式输出给定的 intent 规范</td>
</tr>
</tbody>
</table>
<p>adb shell am start [-D] [-W] [-P ] [--start-profiler ]</p>
<pre><code>           [--sampling INTERVAL] [-R COUNT] [-S] [--opengl-trace]

           [--user &lt;USER_ID&gt; | current] &lt;INTENT&gt;
</code></pre>
<ul>
<li>
<p>-D：启用调试功能。</p>
</li>
<li>
<p>-W：等待启动完成。</p>
</li>
<li>
<p>--start-profiler file：启动性能剖析器并将结果发送至 file。</p>
</li>
<li>
<p>-P file：类似于 --start-profiler，但当应用进入空闲状态时剖析停止。</p>
</li>
<li>
<p>-R count：重复启动 Activity count 次。在每次重复前，将完成顶层 Activity。</p>
</li>
<li>
<p>-S：在启动 Activity 前，强行停止目标应用。</p>
</li>
<li>
<p>--opengl-trace：启用 OpenGL 函数的跟踪。</p>
</li>
<li>
<p>--user user_id | current：指定要作为哪个用户运行；如果未指定，则作为当前用户运行。</p>
</li>
</ul>
<p>系统预定义广播</p>
<table>
<thead>
<tr>
<th style="text-align:center">action</th>
<th style="text-align:center">触发时机</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">android.net.conn.CONNECTIVITY_CHANGE</td>
<td style="text-align:center">网络连接发生变化</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.SCREEN_ON</td>
<td style="text-align:center">屏幕点亮</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.SCREEN_OFF</td>
<td style="text-align:center">屏幕熄灭</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.BATTERY_LOW</td>
<td style="text-align:center">电量低，会弹出电量低提示框</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.BATTERY_OKAY</td>
<td style="text-align:center">电量恢复了</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.BOOT_COMPLETED</td>
<td style="text-align:center">设备启动完毕</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.DEVICE_STORAGE_LOW</td>
<td style="text-align:center">存储空间过低</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.DEVICE_STORAGE_OK</td>
<td style="text-align:center">存储空间恢复</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.PACKAGE_ADDED</td>
<td style="text-align:center">安装了新的应用</td>
</tr>
<tr>
<td style="text-align:center">android.net.wifi.STATE_CHANGE</td>
<td style="text-align:center">WiFi连接状态发生变化</td>
</tr>
<tr>
<td style="text-align:center">android.net.wifi.WIFI_STATE_CHANGED</td>
<td style="text-align:center">WiFi状态变为启用/关闭/正在启动/正在关闭/未知</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.BATTERY_CHANGED</td>
<td style="text-align:center">电池电量发生变化</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.INPUT_METHOD_CHANGED</td>
<td style="text-align:center">系统输入法发生变化</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.ACTION_POWER_CONNECTED</td>
<td style="text-align:center">外部电源连接</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.ACTION_POWER_DISCONNECTED</td>
<td style="text-align:center">外部电源断开连接</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.DREAMING_STARTED</td>
<td style="text-align:center">系统开始休眠</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.DREAMING_STOPPED</td>
<td style="text-align:center">系统停止休眠</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.WALLPAPER_CHANGED</td>
<td style="text-align:center">壁纸发生变化</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.HEADSET_PLUG</td>
<td style="text-align:center">插入耳机</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.MEDIA_UNMOUNTED</td>
<td style="text-align:center">卸载外部介质</td>
</tr>
<tr>
<td style="text-align:center">android.intent.action.MEDIA_MOUNTED</td>
<td style="text-align:center">挂载外部介质</td>
</tr>
<tr>
<td style="text-align:center">android.os.action.POWER_SAVE_MODE_CHANGED</td>
<td style="text-align:center">省电模式开启</td>
</tr>
</tbody>
</table>
<p><strong>device policy manager (dpm，设备政策管理器)</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">set-active-admin [options] component</td>
<td style="text-align:center">将 component 设为活动管理。</td>
</tr>
<tr>
<td style="text-align:center">set-profile-owner [options] component</td>
<td style="text-align:center">将 component 设为活动管理，并将其软件包设为现有用户的个人资料所有者</td>
</tr>
<tr>
<td style="text-align:center">set-device-owner [options] component</td>
<td style="text-align:center">将 component 设为活动管理，并将其软件包设为设备所有者</td>
</tr>
<tr>
<td style="text-align:center">remove-active-admin [options] component</td>
<td style="text-align:center">停用活动管理</td>
</tr>
<tr>
<td style="text-align:center">force-network-logs</td>
<td style="text-align:center">强制系统让任何现有网络日志随时可供 DPC 检索</td>
</tr>
<tr>
<td style="text-align:center">force-security-logs</td>
<td style="text-align:center">强制系统向 DPC 提供任何现有安全日志</td>
</tr>
</tbody>
</table>
<h4>模拟操作</h4>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb shell input [&lt;source&gt;] &lt;command&gt; [&lt;arg&gt;...]

sources
      mouse
      keyboard
      joystick
      touchnavigation
      touchpad
      trackball
      stylus
      dpad
      gesture
      touchscreen
      gamepad

The commands and default sources are:
      text &lt;string&gt; (Default: touchscreen)	输入信息
      keyevent [--longpress] &lt;key code number or name&gt; ... (Default: keyboard)	屏幕按键
      tap &lt;x&gt; &lt;y&gt; (Default: touchscreen)		屏幕点击
      swipe &lt;x1&gt; &lt;y1&gt; &lt;x2&gt; &lt;y2&gt; [duration(ms)] (Default: touchscreen)	手势滑动
      press (Default: trackball)
      roll &lt;dx&gt; &lt;dy&gt; (Default: trackball)

</code></pre>
<p>模拟”<strong>长按（long press）</strong></p>
<p>adb shell input swipe 100 500 100 500 500</p>
<table>
<thead>
<tr>
<th style="text-align:center">keycode</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">HOME 键</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">返回键</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">打开拨号应用</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">挂断电话</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:center">增加音量</td>
</tr>
<tr>
<td style="text-align:center">25</td>
<td style="text-align:center">降低音量</td>
</tr>
<tr>
<td style="text-align:center">26</td>
<td style="text-align:center">电源键</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:center">拍照（需要在相机应用里）</td>
</tr>
<tr>
<td style="text-align:center">64</td>
<td style="text-align:center">打开浏览器</td>
</tr>
<tr>
<td style="text-align:center">82</td>
<td style="text-align:center">菜单键</td>
</tr>
<tr>
<td style="text-align:center">85</td>
<td style="text-align:center">播放/暂停</td>
</tr>
<tr>
<td style="text-align:center">86</td>
<td style="text-align:center">停止播放</td>
</tr>
<tr>
<td style="text-align:center">87</td>
<td style="text-align:center">播放下一首</td>
</tr>
<tr>
<td style="text-align:center">88</td>
<td style="text-align:center">播放上一首</td>
</tr>
<tr>
<td style="text-align:center">122</td>
<td style="text-align:center">移动光标到行首或列表顶部</td>
</tr>
<tr>
<td style="text-align:center">123</td>
<td style="text-align:center">移动光标到行末或列表底部</td>
</tr>
<tr>
<td style="text-align:center">126</td>
<td style="text-align:center">恢复播放</td>
</tr>
<tr>
<td style="text-align:center">127</td>
<td style="text-align:center">暂停播放</td>
</tr>
<tr>
<td style="text-align:center">164</td>
<td style="text-align:center">静音</td>
</tr>
<tr>
<td style="text-align:center">176</td>
<td style="text-align:center">打开系统设置</td>
</tr>
<tr>
<td style="text-align:center">187</td>
<td style="text-align:center">切换应用</td>
</tr>
<tr>
<td style="text-align:center">207</td>
<td style="text-align:center">打开联系人</td>
</tr>
<tr>
<td style="text-align:center">208</td>
<td style="text-align:center">打开日历</td>
</tr>
<tr>
<td style="text-align:center">209</td>
<td style="text-align:center">打开音乐</td>
</tr>
<tr>
<td style="text-align:center">210</td>
<td style="text-align:center">打开计算器</td>
</tr>
<tr>
<td style="text-align:center">220</td>
<td style="text-align:center">降低屏幕亮度</td>
</tr>
<tr>
<td style="text-align:center">221</td>
<td style="text-align:center">提高屏幕亮度</td>
</tr>
<tr>
<td style="text-align:center">223</td>
<td style="text-align:center">系统休眠</td>
</tr>
<tr>
<td style="text-align:center">224</td>
<td style="text-align:center">点亮屏幕</td>
</tr>
<tr>
<td style="text-align:center">231</td>
<td style="text-align:center">打开语音助手</td>
</tr>
<tr>
<td style="text-align:center">276</td>
<td style="text-align:center">如果没有 wakelock 则让系统休眠</td>
</tr>
</tbody>
</table>
<p><strong><a href="https://developer.android.google.cn/studio/command-line/perfetto?hl=zh-cn" target="_blank">perfetto</a></strong></p>
<p>收集性能跟踪数据</p>
<ul>
<li>
<p>使用 ftrace 收集内核信息</p>
</li>
<li>
<p>使用 atrace 收集服务和应用中的用户空间注释</p>
</li>
<li>
<p>使用 heapprofd 收集服务和应用的本地内存使用情况信息</p>
</li>
<li>
<p>轻量模式：只能选择一部分数据源，具体来说就是 atrace 和 ftrace。但此模式可提供类似于 systrace 的接口。</p>
</li>
</ul>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb shell perfetto [ --time TIMESPEC ] [ --buffer SIZE ] [ --size SIZE ]
             [ ATRACE_CAT | FTRACE_GROUP/FTRACE_NAME | FTRACE_GROUP/* ]...

</code></pre>
<ul>
<li>普通模式：从协议缓冲区获取其配置，并且可以让您使用 atrace 和 ftrace 之外的数据源，从而更加充分地利用 perfetto 的功能。</li>
</ul>
<pre data-syntax="shell"><code class="lang-shell hljs raw">adb shell perfetto [ --txt ] --config CONFIG_FILE

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">选项</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">--background</td>
<td style="text-align:center">-d</td>
</tr>
<tr>
<td style="text-align:center">--out OUT_FILE</td>
<td style="text-align:center">-o OUT_FILE</td>
</tr>
<tr>
<td style="text-align:center">--dropbox TAG</td>
<td style="text-align:center">使用您指定的标签通过 <a href="https://developer.android.google.cn/reference/android/os/DropBoxManager.html?hl=zh-cn" target="_blank">DropBoxManager API </a>来上传您的跟踪数据。</td>
</tr>
<tr>
<td style="text-align:center">--no-guardrails</td>
<td style="text-align:center">在测试中启用 --dropbox 标记时，停用防止资源过多使用的保护措施。</td>
</tr>
<tr>
<td style="text-align:center">--reset-guardrails</td>
<td style="text-align:center">重置 guardrails 的持久状态并退出（用于测试）。</td>
</tr>
<tr>
<td style="text-align:center">--query</td>
<td style="text-align:center">查询服务状态，并将其输出为用户可读的文本。</td>
</tr>
<tr>
<td style="text-align:center">--query-raw</td>
<td style="text-align:center">与“--query”类似，但会输出 tracing_service_state.proto. 的原始 proto 编码字节。</td>
</tr>
<tr>
<td style="text-align:center">--help</td>
<td style="text-align:center">-h</td>
</tr>
</tbody>
</table>
<p><strong>root</strong></p>
<p>adb [root | unroot]</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># 查看连接过的 WiFi 密码
adb shell "su -c 'cat /data/misc/wifi/*.conf'"
# 开启/关闭 WiFi
adb shell svc wifi [enable | disable]

# 启用/禁用 SELinux
adb shell setenforce [1 | 0]

# 启用/禁用 dm_verity
adb [enable-verity | disable-verity]

</code></pre>
<p>dm-verity是Device mapper架构下的一种目标设备类型，通过它来保障设备或设备分区的完整性</p>
<p>Device Mapper为Linux内核提供了一个从逻辑设备到物理设备的映射框架，用于定制资源的管理策略</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">global options:
 -a         listen on all network interfaces, not just localhost
 -d         use USB device (error if multiple devices connected)
 -e         use TCP/IP device (error if multiple TCP/IP devices available)
 -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
 -t ID      use device with given transport id
 -H         name of adb server host [default=localhost]
 -P         port of adb server [default=5037]
 -L SOCKET  listen on given socket for adb server [default=tcp:localhost:5037]

general commands:
 devices [-l]             list connected devices (-l for long output)
 help                     show this help message
 version                  show version num

networking:
 connect HOST[:PORT]      connect to a device via TCP/IP
 disconnect [[HOST]:PORT] disconnect from given TCP/IP device, or all
 forward --list           list all forward socket connections
 forward [--no-rebind] LOCAL REMOTE
     forward socket connection using:
       tcp:&lt;port&gt; (&lt;local&gt; may be "tcp:0" to pick any open port)
       localabstract:&lt;unix domain socket name&gt;
       localreserved:&lt;unix domain socket name&gt;
       localfilesystem:&lt;unix domain socket name&gt;
       dev:&lt;character device name&gt;
       jdwp:&lt;process pid&gt; (remote only)
       acceptfd:&lt;fd&gt; (listen only)
 forward --remove LOCAL   remove specific forward socket connection
 forward --remove-all     remove all forward socket connections
 ppp TTY [PARAMETER...]   run PPP over USB
 reverse --list           list all reverse socket connections from device
 reverse [--no-rebind] REMOTE LOCAL
     reverse socket connection using:
       tcp:&lt;port&gt; (&lt;remote&gt; may be "tcp:0" to pick any open port)
       localabstract:&lt;unix domain socket name&gt;
       localreserved:&lt;unix domain socket name&gt;
       localfilesystem:&lt;unix domain socket name&gt;
 reverse --remove REMOTE  remove specific reverse socket connection
 reverse --remove-all     remove all reverse socket connections from device

file transfer
 push [--sync] LOCAL... REMOTE
     copy local files/directories to device
     --sync: only push files that are newer on the host than the device
 pull [-a] REMOTE... LOCAL
     copy files/dirs from device
     -a: preserve file timestamp and mode
 sync [all|data|odm|oem|product|system|system_ext|vendor]
     sync a local build from $ANDROID_PRODUCT_OUT to the device (default all)
     -l: list files that would be copied, but don't copy them

shell
 shell [-e ESCAPE] [-n] [-Tt] [-x] [COMMAND...]
     run remote shell command (interactive shell if no command given)
     -e: choose escape character, or "none"; default '~'
     -n: don't read from stdin
     -T: disable pty allocation
     -t: allocate a pty if on a tty (-tt: force pty allocation)
     -x: disable remote exit codes and stdout/stderr separation
 emu COMMAND              run emulator console command


 install [-lrtsdg] [--instant] PACKAGE
     push a single package to the device and install it
 install-multiple [-lrtsdpg] [--instant] PACKAGE...
     push multiple APKs to the device for a single package and install them
 install-multi-package [-lrtsdpg] [--instant] PACKAGE...
     push one or more packages to the device and install them atomically
     -r: replace existing application
     -t: allow test packages
     -d: allow version code downgrade (debuggable packages only)
     -p: partial application install (install-multiple only)
     -g: grant all runtime permissions
     --abi ABI: override platform's default ABI
     --instant: cause the app to be installed as an ephemeral install app
     --no-streaming: always push APK to device and invoke Package Manager as separate steps
     --streaming: force streaming APK directly into Package Manager
     --fastdeploy: use fast deploy
     --no-fastdeploy: prevent use of fast deploy
     --force-agent: force update of deployment agent when using fast deploy
     --date-check-agent: update deployment agent when local version is newer and using fast deploy
     --version-check-agent: update deployment agent when local version has different version code and using fast deploy
     (See also `adb shell pm help` for more options.)
 uninstall [-k] PACKAGE
     remove this app package from the device
     '-k': keep the data and cache directories

debugging:
 bugreport [PATH]
     write bugreport to given PATH [default=bugreport.zip];
     if PATH is a directory, the bug report is saved in that directory.
     devices that don't support zipped bug reports output to stdout.
 jdwp                     list pids of processes hosting a JDWP transport
 logcat                   show device log (logcat --help for more)

security:
 disable-verity           disable dm-verity checking on userdebug builds
 enable-verity            re-enable dm-verity checking on userdebug builds
 keygen FILE
     generate adb public/private key; private key stored in FILE,

scripting:
 wait-for[-TRANSPORT]-STATE
     wait for device to be in the given state
     STATE: device, recovery, rescue, sideload, bootloader, or disconnect
     TRANSPORT: usb, local, or any [default=any]
 get-state                print offline | bootloader | device
 get-serialno             print &lt;serial-number&gt;
 get-devpath              print &lt;device-path&gt;
 remount [-R]
      remount partitions read-write. if a reboot is required, -R will
      will automatically reboot the device.
 reboot [bootloader|recovery|sideload|sideload-auto-reboot]
     reboot the device; defaults to booting system image but
     supports bootloader and recovery too. sideload reboots
     into recovery and automatically starts sideload mode,
     sideload-auto-reboot is the same but reboots after sideloading.
 sideload OTAPACKAGE      sideload the given full OTA package
 root                     restart adbd with root permissions
 unroot                   restart adbd without root permissions
 usb                      restart adbd listening on USB
 tcpip PORT               restart adbd listening on TCP on PORT

internal debugging:
 start-server             ensure that there is a server running
 kill-server              kill the server if it is running
 reconnect                kick connection from host side to force reconnect
 reconnect device         kick connection from device side to force reconnect
 reconnect offline        reset offline/unauthorized devices to force reconnect

</code></pre>
<h3><a href="https://developer.android.google.cn/studio/command-line/logcat?hl=zh-cn" target="_blank">logcat</a></h3>
<p>通过 adb 调用，用于查看应用和系统日志。</p>
<p>Android 日志</p>
<ul>
<li>
<p>底层的 Linux 内核日志	/proc/kmsg</p>
</li>
<li>
<p>Android 的日志	/dev/log</p>
</li>
</ul>
<p>命令格式：[adb] logcat [] ... [] ...</p>
<table>
<thead>
<tr>
<th style="text-align:center">选项</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-b </td>
<td style="text-align:center">加载可供查看的备用日志缓冲区</td>
</tr>
<tr>
<td style="text-align:center">-c, --clear</td>
<td style="text-align:center">清除（清空）所选的缓冲区并退出。默认缓冲区集为 main、system 和 crash。如需清除所有缓冲区，请使用 -b all -c。</td>
</tr>
<tr>
<td style="text-align:center">-e , --regex=</td>
<td style="text-align:center">只输出日志消息与  匹配的行，其中  是正则表达式。</td>
</tr>
<tr>
<td style="text-align:center">-m , --max-count=</td>
<td style="text-align:center">输出  行后退出</td>
</tr>
<tr>
<td style="text-align:center">--print</td>
<td style="text-align:center">与 --regex 和 --max-count 配对，使内容绕过正则表达式过滤器，但仍能够在获得适当数量的匹配时停止。</td>
</tr>
<tr>
<td style="text-align:center">-d</td>
<td style="text-align:center">将日志转储到屏幕并退出。</td>
</tr>
<tr>
<td style="text-align:center">-f </td>
<td style="text-align:center">将日志消息输出写入 。默认值为 stdout。</td>
</tr>
<tr>
<td style="text-align:center">-g, --buffer-size</td>
<td style="text-align:center">输出指定日志缓冲区的大小并退出。</td>
</tr>
<tr>
<td style="text-align:center">-n </td>
<td style="text-align:center">将轮替日志的数量上限设置为 。默认值为 4。需要使用 -r 选项。</td>
</tr>
<tr>
<td style="text-align:center">-r </td>
<td style="text-align:center">每输出  时轮替日志文件。默认值为 16。需要 -f 选项。</td>
</tr>
<tr>
<td style="text-align:center">-s</td>
<td style="text-align:center">相当于过滤器表达式 '*:S'；它将所有标记的优先级设为“静默”，并用于放在可添加内容的过滤器表达式列表之前。</td>
</tr>
<tr>
<td style="text-align:center">-v </td>
<td style="text-align:center">设置日志消息的输出格式。默认格式为 threadtime。</td>
</tr>
<tr>
<td style="text-align:center">-D, --dividers</td>
<td style="text-align:center">输出各个日志缓冲区之间的分隔线。</td>
</tr>
<tr>
<td style="text-align:center">-t </td>
<td style="text-align:center">仅输出最新的行数。此选项包括 -d 功能。</td>
</tr>
<tr>
<td style="text-align:center">-t ''</td>
<td style="text-align:center">输出自指定时间以来的最新行。此选项包括 -d 功能</td>
</tr>
<tr>
<td style="text-align:center">-T </td>
<td style="text-align:center">输出自指定时间以来的最新行数。此选项不包括 -d 功能。</td>
</tr>
<tr>
<td style="text-align:center">-T ''</td>
<td style="text-align:center">输出自指定时间以来的最新行。此选项不包括 -d 功能</td>
</tr>
<tr>
<td style="text-align:center">-L, --last</td>
<td style="text-align:center">在最后一次重新启动之前转储日志。</td>
</tr>
<tr>
<td style="text-align:center">-B, --binary</td>
<td style="text-align:center">以二进制文件形式输出日志。</td>
</tr>
<tr>
<td style="text-align:center">-S, --statistics</td>
<td style="text-align:center">在输出中包含统计信息，以帮助您识别和定位日志垃圾信息发送者。</td>
</tr>
<tr>
<td style="text-align:center">-G </td>
<td style="text-align:center">设置日志环形缓冲区的大小。可以在结尾处添加 K 或 M，以指示单位为千字节或兆字节。</td>
</tr>
<tr>
<td style="text-align:center">-p, --prune</td>
<td style="text-align:center">输出（读取）当前的允许 (white) 列表和拒绝 (black) 列表，不采用任何参数</td>
</tr>
<tr>
<td style="text-align:center">-P ' ...' --prune ' ...' -P '&lt;white_and_black_list&gt;'</td>
<td style="text-align:center">写入（设置）允许 (white) 列表和拒绝 (black) 列表以出于特定目的调整日志记录内容</td>
</tr>
</tbody>
</table>
<p>优先级（priority）</p>
<ul>
<li>
<p>V —— Verbose（最低，输出得最多）</p>
</li>
<li>
<p>D —— Debug</p>
</li>
<li>
<p>I —— Info</p>
</li>
<li>
<p>W —— Warning</p>
</li>
<li>
<p>E —— Error</p>
</li>
<li>
<p>F —— Fatal</p>
</li>
<li>
<p>S —— Silent（最高，不输出）</p>
</li>
</ul>
<p><strong>输出格式</strong></p>
<p>-v </p>
<ul>
<li>
<p>brief：显示优先级、标记以及发出消息的进程的 PID。</p>
</li>
<li>
<p>long：显示所有元数据字段，并使用空白行分隔消息。</p>
</li>
<li>
<p>process：仅显示 PID。</p>
</li>
<li>
<p>raw：显示不包含其他元数据字段的原始日志消息。</p>
</li>
<li>
<p>tag：仅显示优先级和标记。</p>
</li>
<li>
<p>thread:：旧版格式，显示优先级、PID 以及发出消息的线程的 TID。</p>
</li>
<li>
<p>threadtime（默认值）：显示日期、调用时间、优先级、标记、PID 以及发出消息的线程的 TID。</p>
</li>
<li>
<p>time：显示日期、调用时间、优先级、标记以及发出消息的进程的 PID。</p>
</li>
</ul>
<p><strong>格式修饰符</strong></p>
<ul>
<li>
<p>color：使用不同的颜色来显示每个优先级。</p>
</li>
<li>
<p>descriptive：显示日志缓冲区事件说明。此修饰符仅影响事件日志缓冲区消息，不会对其他非二进制文件缓冲区产生任何影响。事件说明取自 event-log-tags 数据库。</p>
</li>
<li>
<p>epoch：显示自 1970 年 1 月 1 日以来的时间（以秒为单位）。</p>
</li>
<li>
<p>monotonic：显示自上次启动以来的时间（以 CPU 秒为单位）。</p>
</li>
<li>
<p>printable：确保所有二进制日志记录内容都进行了转义。</p>
</li>
<li>
<p>uid：如果访问控制允许，则显示 UID 或记录的进程的 Android ID。</p>
</li>
<li>
<p>usec：显示精确到微秒的时间。</p>
</li>
<li>
<p>UTC：显示 UTC 时间。</p>
</li>
<li>
<p>year：将年份添加到显示的时间。</p>
</li>
<li>
<p>zone：将本地时区添加到显示的时间。</p>
</li>
</ul>
<p><strong>备用日志缓冲区</strong></p>
<p>-b </p>
<ul>
<li>
<p>radio：查看包含无线装置/电话相关消息的缓冲区。</p>
</li>
<li>
<p>events：查看已经过解译的二进制系统事件缓冲区消息。</p>
</li>
<li>
<p>main：查看主日志缓冲区（默认），不包含系统和崩溃日志消息。</p>
</li>
<li>
<p>system：查看系统日志缓冲区（默认）。</p>
</li>
<li>
<p>crash：查看崩溃日志缓冲区（默认）。</p>
</li>
<li>
<p>all：查看所有缓冲区。</p>
</li>
<li>
<p>default：报告 main、system 和 crash 缓冲区</p>
</li>
</ul>
<h3>fastboot</h3>
<p>将平台或其他系统映像刷写到设备上</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">fastboot [ &lt;option&gt; ] &lt;command&gt;
commands:
  devices                                  list all connected devices
  reboot                                   reboot device normally
  reboot-bootloader                        reboot device into bootloader
  flashall                                 flash boot + recovery + system
  flash &lt;partition&gt; [ &lt;filename&gt; ]         write a file to a flash partition
  erase &lt;partition&gt;                        erase a flash partition
  getvar &lt;variable&gt;                        display a bootloader variable
  update &lt;filename&gt;                        reflash device from update.zip
  boot &lt;kernel&gt; [ &lt;ramdisk&gt; ]              download and boot kernel
  flash:raw boot &lt;kernel&gt; [ &lt;ramdisk&gt; ]    create bootimage and flash it

options:
  -w                                       erase userdata and cache
  -s &lt;serial number&gt;                       specify device serial number
  -p &lt;product&gt;                             specify product name
  -c &lt;cmdline&gt;                             override kernel commandline
  -i &lt;vendor id&gt;                           specify a custom USB vendor id
  -b &lt;base_addr&gt;                           specify a custom kernel base address
  -n &lt;page size&gt;                           specify the nand page size. default: 2

</code></pre>
<p><strong>Android系统分区</strong></p>
<ul>
<li>
<p>hboot——系统开机引导类似电脑BIOS，这块刷错手机就会变成砖</p>
</li>
<li>
<p>radio——通讯模块、基带、WIFI、Bluetooth等衔接硬件的驱动软件</p>
</li>
<li>
<p>recovery——系统故障时负责恢复</p>
</li>
<li>
<p>boot——Linux嵌入式系统内核</p>
</li>
<li>
<p>system——系统文件、应用</p>
</li>
<li>
<p>cache——系统运行时产生的缓存</p>
</li>
<li>
<p>userdata——用户使用APP产生的缓存数据</p>
</li>
</ul>
<h1>刷机</h1>
<p>重装手机系统</p>
<ul>
<li>
<p>fastboot，一种线刷，使用USB数据线连接手机的一种刷机模式。线刷更可靠，安全。</p>
</li>
<li>
<p>recovery，一种卡刷，将刷机包放在sd卡上，然后在recovery中刷机的模式</p>
</li>
</ul>
<p><strong>主流Android手机进入Fastboot的方式：关机状态下，同时长按【音量-】+【电源键】</strong></p>
<p>步骤</p>
<ol>
<li>
<p>进入Fastboot，解锁手机 Bootloader</p>
</li>
<li>
<p>刷入第三方 Recovery（TWRP.img，TeamWin Recovery Project）</p>
</li>
<li>
<p>安装Magisk.apk，需科学上网，App内下载Magisk.zip</p>
</li>
<li>
<p>通过第三方 Recovery 刷入Magisk，获取Root</p>
</li>
</ol>
<p>加锁：fastboot oem lock</p>
<p>BootLoader（引导程序）：在操作系统内核运行之前运行。可以初始化硬件设备、建立内存空间映射图，从而将系统的软硬件环境带到一个合适状态，以便为最终调用操作系统内核准备好正确的环境。</p>
<p><strong>Xposed框架(Xposed Framework)</strong>：一套开源的、在Android高权限模式下运行的框架服务，可以在不修改<a href="https://baike.baidu.com/item/APK" target="_blank">APK</a>文件的情况下影响程序运行(修改系统)的框架服务，基于它可以制作出许多功能强大的模块，且在功能不冲突的情况下同时运作</p>
<p>一个针对Android平台的动态劫持项目，通过替换/system/bin/app_process程序控制zygote进程，使得app_process在启动过程中会加载XposedBridge.jar这个jar包，从而完成对Zygote进程及其创建的Dalvik虚拟机的劫持。</p>
<p>Magisk：通过启动时在 boot 中创建钩子，把 /data/magisk.img 挂载到 /magisk，构建出一个在 system 基础上能够自定义替换，增加以及删除的文件系统，所有操作都在启动的时候完成，实际上并没有对 /system 分区进行修改（即 systemless 接口，以不触动 /system 的方式修改 /system）</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807401160-46fbfb24-73a6-4334-9416-1a4b3d9e2378.png" alt class="align-none" /></p>
<h1>Monkey</h1>
<p>向系统发送伪随机的用户事件（如按键、手势、触摸屏等输入），以随机且可重复的方式对应用进行压力测试。</p>
<p>Monkey程序由Android系统自带，使用Java语言写成，在Android文件系统中的路径：/system/framework/monkey.jar；</p>
<p>Monkey.jar程序是由一个名为“monkey”的Shell脚本来启动执行，shell脚本的路径：/system/bin/monkey；</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">monkey [options] &lt;event-count&gt;

# 启动您的应用并向其发送 500 个伪随机事件：
adb shell monkey -p your.package.name -v 500

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">类别</th>
<th style="text-align:center">选项</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">常规</td>
<td style="text-align:center">--help</td>
<td style="text-align:center">输出简单的使用指南。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">-v</td>
<td style="text-align:center">命令行上的每个 -v 都会增加详细程度级别。级别 0（默认值）只提供启动通知、测试完成和最终结果。级别 1 提供有关测试在运行时的更多详细信息，例如发送到您的 Activity 的各个事件。级别 2 提供更详细的设置信息，例如已选择或未选择用于测试的 Activity。</td>
</tr>
<tr>
<td style="text-align:center">事件</td>
<td style="text-align:center">-s </td>
<td style="text-align:center">伪随机数生成器的种子值。如果您使用相同的种子值重新运行 Monkey，它将会生成相同的事件序列。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--throttle </td>
<td style="text-align:center">在事件之间插入固定的延迟时间</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-touch </td>
<td style="text-align:center">调整轻触事件所占百分比。（轻触事件是指屏幕上的单个位置上的按下/释放事件。）</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-motion </td>
<td style="text-align:center">调整动作事件所占百分比。（动作事件包括屏幕上某个位置的按下事件，一系列伪随机动作和一个释放事件。）</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-trackball </td>
<td style="text-align:center">调整轨迹球事件所占百分比。（轨迹球事件包括一个或多个随机动作，有时后跟点击。）</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-nav </td>
<td style="text-align:center">调整“基本”导航事件所占百分比。（导航事件包括向上/向下/向左/向右，作为方向输入设备的输入。）</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-majornav </td>
<td style="text-align:center">调整“主要”导航事件所占百分比。（这些导航事件通常会导致界面中的操作，例如 5 方向键的中间按钮、返回键或菜单键。）</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-syskeys </td>
<td style="text-align:center">调整“系统”按键事件所占百分比。（这些按键通常预留供系统使用，例如“主屏幕”、“返回”、“发起通话”、“结束通话”或“音量控件”。）</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-appswitch </td>
<td style="text-align:center">调整 Activity 启动次数所占百分比。Monkey 会以随机间隔发起 startActivity() 调用，以最大限度地覆盖软件包中的所有 Activity。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--pct-anyevent </td>
<td style="text-align:center">调整其他类型事件所占百分比。这包括所有其他类型的事件，例如按键、设备上的其他不太常用的按钮等等。</td>
</tr>
<tr>
<td style="text-align:center">约束条件</td>
<td style="text-align:center">-p </td>
<td style="text-align:center">仅允许系统访问这些软件包内的 Activity。如果未指定任何软件包，Monkey 将允许系统启动所有软件包中的 Activity。要指定多个软件包，请多次使用 -p 选项，每个软件包对应一个 -p 选项。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">-c </td>
<td style="text-align:center">仅允许系统访问其中一个指定类别中所列的 Activity。如果没有指定任何类别，Monkey 会选择 Intent.CATEGORY_LAUNCHER 或 Intent.CATEGORY_MONKEY 类别所列的 Activity。要指定多个类别，请多次使用 -c 选项，每个类别对应一个 -c 选项。</td>
</tr>
<tr>
<td style="text-align:center">调试</td>
<td style="text-align:center">--dbg-no-events</td>
<td style="text-align:center">初始启动到测试 Activity，但不会生成任何其他事件。为了获得最佳结果，请结合使用 -v、一个或多个软件包约束条件以及非零限制，以使 Monkey 运行 30 秒或更长时间。这提供了一个环境，您可以在其中监控应用调用的软件包转换操作。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--hprof</td>
<td style="text-align:center">如果设置此选项，则会在 Monkey 事件序列之前和之后立即生成分析报告。这将在 data/misc 下生成大型（约为 5Mb）文件，因此请谨慎使用。如需了解如何分析性能剖析报告，请参阅<a href="https://developer.android.google.cn/studio/profile?hl=zh-cn" target="_blank">剖析应用性能。</a></td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--ignore-crashes</td>
<td style="text-align:center">通常，当应用崩溃或遇到任何类型的未处理异常时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--ignore-timeouts</td>
<td style="text-align:center">通常，当应用遇到任何类型的超时错误（例如“应用无响应”对话框）时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--ignore-security-exceptions</td>
<td style="text-align:center">通常，当应用遇到任何类型的权限错误（例如，如果它尝试启动需要特定权限的 Activity）时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--kill-process-after-error</td>
<td style="text-align:center">通常，当 Monkey 因出错而停止运行时，出现故障的应用将保持运行状态。设置此选项后，它将会指示系统停止发生错误的进程。注意，在正常（成功）完成情况下，已启动的进程不会停止，并且设备仅会处于最终事件之后的最后状态。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--monitor-native-crashes</td>
<td style="text-align:center">监视并报告 Android 系统原生代码中发生的崩溃。如果设置了 --kill-process-after-error，系统将会停止。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">--wait-dbg</td>
<td style="text-align:center">阻止 Monkey 执行，直到为其连接了调试程序。</td>
</tr>
</tbody>
</table>
<h1>monkeyrunner</h1>
<p>monkeyrunner 工具提供了一个 API，用于编写可从 Android 代码外部控制 Android 设备或模拟器的程序。</p>
<ul>
<li>
<p>MonkeyRunner：一个包含用于 monkeyrunner 程序的实用程序方法的类。提供了用于将 monkeyrunner 连接到设备或模拟器的方法。它还提供了用于为 monkeyrunner 程序创建界面以及显示内置帮助的方法。</p>
</li>
<li>
<p>MonkeyDevice：代表设备或模拟器。此类提供了用于安装和卸载软件包、启动 Activity 以及向应用发送键盘或轻触事件的方法。您也可以使用这个类来运行测试软件包。</p>
</li>
<li>
<p>MonkeyImage：代表屏幕截图。此类提供了用于截屏、将位图转换为各种格式、比较两个 MonkeyImage 对象以及将图片写入文件的方法。</p>
</li>
</ul>
<p>示例</p>
<pre data-syntax="python"><code class="lang-python hljs raw"># Imports the monkeyrunner modules used by this program
from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice

# Connects to the current device, returning a MonkeyDevice object
device = MonkeyRunner.waitForConnection()

# Installs the Android package. Notice that this method returns a boolean, so you can test
# to see if the installation worked.
device.installPackage('myproject/bin/MyApplication.apk')

# sets a variable with the package's internal name
package = 'com.example.android.myapplication'

# sets a variable with the name of an Activity in the package
activity = 'com.example.android.myapplication.MainActivity'

# sets the name of the component to start
runComponent = package + '/' + activity

# Runs the component
device.startActivity(component=runComponent)

# Presses the Menu button
device.press('KEYCODE_MENU', MonkeyDevice.DOWN_AND_UP)

# Takes a screenshot
result = device.takeSnapshot()

# Writes the screenshot to a file
result.writeToFile('myproject/shot1.png','png')

</code></pre>
<p><a href="http://appium.io/docs/cn/about-appium/intro/" target="_blank">http://appium.io/docs/cn/about-appium/intro/</a></p>
<h1><a href="https://github.com/appium/appium" target="_blank">appium</a></h1>
<p>一个开源工具，用于自动化 iOS 手机、 Android 手机和 Windows 桌面平台上的原生、移动 Web 和混合应用。</p>
<p>Appium 的核心一个是暴露 REST API 的 WEB 服务器(Node.js)。它接受来自客户端的连接，监听命令并在移动设备上执行，答复 HTTP 响应来描述执行结果。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">$ npm install -g appium
$ appium

</code></pre>
<p><a href="https://github.com/appium/appium-doctor" target="_blank">appium-doctor</a>	Tool to verify appium installation</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// Install
npm install appium-doctor -g


Usage
appium-doctor.js [options, defaults: --ios --android]

Options:
  --ios       Check iOS setup                             [boolean]
  --android   Check Android setup                         [boolean]
  --dev       Check dev setup                             [boolean]
  --debug     Show debug messages                         [boolean]
  --yes       Always respond yes                          [boolean]
  --no        Always respond no                           [boolean]
  --demo      Run appium-doctor demo (for dev).           [boolean]
  -h, --help  Show help                                   [boolean]

</code></pre>
<p><a href="https://github.com/appium/appium-desktop" target="_blank">Appium Desktop</a></p>
<p>Appium server arguments</p>
<table>
<thead>
<tr>
<th style="text-align:center">Flag</th>
<th style="text-align:center">Default</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">--shell</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Enter REPL mode</td>
</tr>
<tr>
<td style="text-align:center">--allow-cors</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Turn on CORS compatibility mode, which will allow connections to the Appium server from within websites hosted on any domain. Be careful when enabling this feature, since there is a potential security risk if you visit a website that uses a cross-domain request to initiate or introspect sessions on your running Appium server.</td>
</tr>
<tr>
<td style="text-align:center">--ipa</td>
<td style="text-align:center">null</td>
<td style="text-align:center">(IOS-only) abs path to compiled .ipa file</td>
</tr>
<tr>
<td style="text-align:center">-a, --address</td>
<td style="text-align:center">0.0.0.0</td>
<td style="text-align:center">IP Address to listen on</td>
</tr>
<tr>
<td style="text-align:center">-p, --port</td>
<td style="text-align:center">4723</td>
<td style="text-align:center">port to listen on</td>
</tr>
<tr>
<td style="text-align:center">-pa, --base-path</td>
<td style="text-align:center">/wd/hub</td>
<td style="text-align:center">Initial path segment where the Appium/WebDriver API will be hosted. Every endpoint will be behind this segment.</td>
</tr>
<tr>
<td style="text-align:center">-ca, --callback-address</td>
<td style="text-align:center">null</td>
<td style="text-align:center">callback IP Address (default: same as --address)</td>
</tr>
<tr>
<td style="text-align:center">-cp, --callback-port</td>
<td style="text-align:center">null</td>
<td style="text-align:center">callback port (default: same as port)</td>
</tr>
<tr>
<td style="text-align:center">-bp, --bootstrap-port</td>
<td style="text-align:center">4724</td>
<td style="text-align:center">(Android-only) port to use on device to talk to Appium</td>
</tr>
<tr>
<td style="text-align:center">-r, --backend-retries</td>
<td style="text-align:center">3</td>
<td style="text-align:center">(iOS-only) How many times to retry launching Instruments before saying it crashed or timed out</td>
</tr>
<tr>
<td style="text-align:center">--session-override</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Enables session override (clobbering)</td>
</tr>
<tr>
<td style="text-align:center">-l, --pre-launch</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Pre-launch the application before allowing the first session (Requires --app and, for Android, --app-pkg and --app-activity)</td>
</tr>
<tr>
<td style="text-align:center">-g, --log</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Also send log output to this file</td>
</tr>
<tr>
<td style="text-align:center">--log-level</td>
<td style="text-align:center">debug</td>
<td style="text-align:center">Set the server log level for console and logfile (specified as console-level:logfile-level, with both being the same if only one value is supplied). Possible values are debug, info, warn, error, which are progressively less verbose.</td>
</tr>
<tr>
<td style="text-align:center">--log-timestamp</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Show timestamps in console output</td>
</tr>
<tr>
<td style="text-align:center">--local-timezone</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Use local timezone for timestamps</td>
</tr>
<tr>
<td style="text-align:center">--log-no-colors</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Do not use colors in console output</td>
</tr>
<tr>
<td style="text-align:center">-G, --webhook</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Also send log output to this HTTP listener</td>
</tr>
<tr>
<td style="text-align:center">--safari</td>
<td style="text-align:center">false</td>
<td style="text-align:center">(IOS-Only) Use the safari app</td>
</tr>
<tr>
<td style="text-align:center">--default-device, -dd</td>
<td style="text-align:center">false</td>
<td style="text-align:center">(IOS-Simulator-only) use the default simulator that instruments launches on its own</td>
</tr>
<tr>
<td style="text-align:center">--force-iphone</td>
<td style="text-align:center">false</td>
<td style="text-align:center">(IOS-only) Use the iPhone Simulator no matter what the app wants</td>
</tr>
<tr>
<td style="text-align:center">--force-ipad</td>
<td style="text-align:center">false</td>
<td style="text-align:center">(IOS-only) Use the iPad Simulator no matter what the app wants</td>
</tr>
<tr>
<td style="text-align:center">--tracetemplate</td>
<td style="text-align:center">null</td>
<td style="text-align:center">(IOS-only) .tracetemplate file to use with Instruments</td>
</tr>
<tr>
<td style="text-align:center">--instruments</td>
<td style="text-align:center">null</td>
<td style="text-align:center">(IOS-only) path to instruments binary</td>
</tr>
<tr>
<td style="text-align:center">--nodeconfig</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Configuration JSON file to register appium with selenium grid</td>
</tr>
<tr>
<td style="text-align:center">-ra, --robot-address</td>
<td style="text-align:center">0.0.0.0</td>
<td style="text-align:center">IP Address of robot</td>
</tr>
<tr>
<td style="text-align:center">-rp, --robot-port</td>
<td style="text-align:center">-1</td>
<td style="text-align:center">port for robot</td>
</tr>
<tr>
<td style="text-align:center">--chromedriver-port</td>
<td style="text-align:center">9515</td>
<td style="text-align:center">Port upon which ChromeDriver will run</td>
</tr>
<tr>
<td style="text-align:center">--chromedriver-executable</td>
<td style="text-align:center">null</td>
<td style="text-align:center">ChromeDriver executable full path</td>
</tr>
<tr>
<td style="text-align:center">--show-config</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Show info about the appium server configuration and exit</td>
</tr>
<tr>
<td style="text-align:center">--no-perms-check</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Bypass Appium's checks to ensure we can read/write necessary files</td>
</tr>
<tr>
<td style="text-align:center">--strict-caps</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Cause sessions to fail if desired caps are sent in that Appium does not recognize as valid for the selected device</td>
</tr>
<tr>
<td style="text-align:center">--isolate-sim-device</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Xcode 6 has a bug on some platforms where a certain simulator can only be launched without error if all other simulator devices are first deleted. This option causes Appium to delete all devices other than the one being used by Appium. Note that this is a permanent deletion, and you are responsible for using simctl or xcode to manage the categories of devices used with Appium.</td>
</tr>
<tr>
<td style="text-align:center">--tmp</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Absolute path to directory Appium can use to manage temporary files, like built-in iOS apps it needs to move around. On *nix/Mac defaults to /tmp, on Windows defaults to C:\Windows\Temp</td>
</tr>
<tr>
<td style="text-align:center">--trace-dir</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Absolute path to directory Appium use to save ios instruments traces, defaults to /appium-instruments</td>
</tr>
<tr>
<td style="text-align:center">--debug-log-spacing</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Add exaggerated spacing in logs to help with visual inspection</td>
</tr>
<tr>
<td style="text-align:center">--suppress-adb-kill-server</td>
<td style="text-align:center">false</td>
<td style="text-align:center">(Android-only) If set, prevents Appium from killing the adb server instance</td>
</tr>
<tr>
<td style="text-align:center">--async-trace</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Add long stack traces to log entries. Recommended for debugging only.</td>
</tr>
<tr>
<td style="text-align:center">--webkit-debug-proxy-port</td>
<td style="text-align:center">27753</td>
<td style="text-align:center">(IOS-only) Local port used for communication with ios-webkit-debug-proxy</td>
</tr>
<tr>
<td style="text-align:center">-dc, --default-capabilities</td>
<td style="text-align:center">{}</td>
<td style="text-align:center">Set the default desired capabilities, which will be set on each session unless overridden by received capabilities.</td>
</tr>
<tr>
<td style="text-align:center">--reboot</td>
<td style="text-align:center">false</td>
<td style="text-align:center">- (Android-only) reboot emulator after each session and kill it at the end</td>
</tr>
<tr>
<td style="text-align:center">--relaxed-security</td>
<td style="text-align:center">false</td>
<td style="text-align:center">Disable additional security checks, so it is possible to use some advanced features, provided by drivers supporting this option. Only enable it if all the clients are in the trusted network and it is not the case if a client could potentially break out of the session sandbox. Can override enabling of specific features with --deny-insecure. See also the <a href="cs_os_https:_appium.io_docs_en_writing-running-appium_security_index" target="_blank">security doc</a></td>
</tr>
<tr>
<td style="text-align:center">--allow-insecure</td>
<td style="text-align:center">[]</td>
<td style="text-align:center">Allow a list of features which are considered insecure and must be turned on explicitly by system administrators. Feature names are documented by the relevant server/driver. Should be a comma-separated list, or a path to a filename containing one feature name per line. Features listed in --deny-insecure will override anything listed here. Does not make sense to use in conjunction with --relaxed-security. See also the <a href="cs_os_https:_appium.io_docs_en_writing-running-appium_security_index" target="_blank">security doc</a></td>
</tr>
<tr>
<td style="text-align:center">--deny-insecure</td>
<td style="text-align:center">[]</td>
<td style="text-align:center">Specify a list of features which will never be allowed to run, even if --relaxed-security is turned on, and even if feature names are listed with --allow-insecure. Should be a comma-separated list, or a path to a filename containing one feature name per line. See also the <a href="cs_os_https:_appium.io_docs_en_writing-running-appium_security_index" target="_blank">security doc</a></td>
</tr>
<tr>
<td style="text-align:center">--log-filters</td>
<td style="text-align:center">null</td>
<td style="text-align:center">Specify a full path to a JSON file containing one or more log filtering rules. This feature is useful for cases when it is necessary to obfuscate sensitive information, which may be present in server log records, like passwords or access tokens. The format of each rule is described in <a href="https://github.com/appium/appium-support/blob/master/lib/log-internal.js" target="_blank">https://github.com/appium/appium-support/blob/master/lib/log-internal.js</a>. An exception will be thrown on server startup if any of the rules has issues.</td>
</tr>
</tbody>
</table>
<p>预期能力（Desired Capabilities）</p>
<p><a href="cs_os_https:_github.com_appium_appium_blob_master_docs_cn_writing-running-appium_caps" target="_blank">Appium 服务器初始化参数（Capability）</a></p>
<p>&lt;expand_table&gt;</p>
<table>
<thead>
<tr>
<th style="text-align:center">键</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">automationName</td>
<td style="text-align:center">自动化测试的引擎</td>
<td style="text-align:center">Appium （默认）或者 Selendroid</td>
</tr>
<tr>
<td style="text-align:center">platformName</td>
<td style="text-align:center">使用的手机操作系统</td>
<td style="text-align:center">iOS, Android, 或者 FirefoxOS</td>
</tr>
<tr>
<td style="text-align:center">platformVersion</td>
<td style="text-align:center">手机操作系统的版本</td>
<td style="text-align:center">例如 7.1, 4.4</td>
</tr>
<tr>
<td style="text-align:center">deviceName</td>
<td style="text-align:center">使用的手机或模拟器类型</td>
<td style="text-align:center">iPhone Simulator, iPad Simulator, iPhone Retina 4-inch, Android Emulator, Galaxy S4, 等等.... 在 iOS 上，使用 Instruments 的 instruments -s devices 命令可返回一个有效的设备的列表。在 Andorid 上虽然这个参数目前已被忽略，但仍然需要添加上该参数</td>
</tr>
<tr>
<td style="text-align:center">app</td>
<td style="text-align:center">本地绝对路径<em>或</em>远程 http URL 所指向的一个安装包（.ipa,.apk,或 .zip 文件）。Appium 将其安装到合适的设备上。请注意，如果您指定了 appPackage 和 appActivity 参数（见下文），Android 则不需要此参数了。该参数也与 browserName 不兼容。</td>
<td style="text-align:center">/abs/path/to/my.apk 或 <a href="http://myapp.com/app.ipa" target="_blank">http://myapp.com/app.ipa</a></td>
</tr>
<tr>
<td style="text-align:center">browserName</td>
<td style="text-align:center">做自动化时使用的浏览器名字。如果是一个应用则只需填写个空的字符串</td>
<td style="text-align:center">'Safari' 对应 iOS，'Chrome', 'Chromium', 或 'Browser' 则对应 Android</td>
</tr>
<tr>
<td style="text-align:center">newCommandTimeout</td>
<td style="text-align:center">用于客户端在退出或者结束 session 之前，Appium 等待客户端发送一条新命令所花费的时间（秒为单位）</td>
<td style="text-align:center">例如 60</td>
</tr>
<tr>
<td style="text-align:center">language</td>
<td style="text-align:center">(Sim/Emu-only) 为模拟器设置语言</td>
<td style="text-align:center">例如 fr</td>
</tr>
<tr>
<td style="text-align:center">locale</td>
<td style="text-align:center">(Sim/Emu-only) 为模拟器设置所在区域</td>
<td style="text-align:center">例如 fr_CA</td>
</tr>
<tr>
<td style="text-align:center">udid</td>
<td style="text-align:center">连接真机的唯一设备号</td>
<td style="text-align:center">例如 1ae203187fc012g</td>
</tr>
<tr>
<td style="text-align:center">orientation</td>
<td style="text-align:center">(Sim/Emu-only) 模拟器当前的方向</td>
<td style="text-align:center">竖屏 或 横屏</td>
</tr>
<tr>
<td style="text-align:center">autoWebview</td>
<td style="text-align:center">直接转换到 Webview 上下文（context）。默认值为 false</td>
<td style="text-align:center">true, false</td>
</tr>
<tr>
<td style="text-align:center">noReset</td>
<td style="text-align:center">在当前 session 下不会重置应用的状态。默认值为 false</td>
<td style="text-align:center">true, false</td>
</tr>
<tr>
<td style="text-align:center">fullReset</td>
<td style="text-align:center">(iOS)删除所有的模拟器文件夹。(Android) 要清除 app 里的数据，请将应用卸载才能达到重置应用的效果。在 Android, 在 session 完成之后也会将应用卸载掉。默认值为 false</td>
<td style="text-align:center">true, false</td>
</tr>
</tbody>
</table>
<p>Android 独有</p>
<p>&lt;expand_table&gt;</p>
<table>
<thead>
<tr>
<th style="text-align:center">键</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">appActivity</td>
<td style="text-align:center">Activity 的名字是指从你的包中所要启动的 Android acticity。他通常需要再前面添加. （例如 使用 .MainActivity 代替 MainActivity）</td>
<td style="text-align:center">MainActivity, .Settings</td>
</tr>
<tr>
<td style="text-align:center">appPackage</td>
<td style="text-align:center">运行的 Android 应用的包名</td>
<td style="text-align:center">com.example.android.myApp, com.android.settings</td>
</tr>
<tr>
<td style="text-align:center">appWaitActivity</td>
<td style="text-align:center">用于等待启动的 Android Activity 名称</td>
<td style="text-align:center">SplashActivity</td>
</tr>
<tr>
<td style="text-align:center">appWaitPackage</td>
<td style="text-align:center">用于等待启动的 Android 应用的包</td>
<td style="text-align:center">com.example.android.myApp, com.android.settings</td>
</tr>
<tr>
<td style="text-align:center">appWaitDuration</td>
<td style="text-align:center">用于等待 appWaitActivity 启动的超时时间（以毫秒为单位）（默认值为 20000)</td>
<td style="text-align:center">30000</td>
</tr>
<tr>
<td style="text-align:center">deviceReadyTimeout</td>
<td style="text-align:center">用于等待模拟器或真机准备就绪的超时时间</td>
<td style="text-align:center">5</td>
</tr>
<tr>
<td style="text-align:center">androidCoverage</td>
<td style="text-align:center">用于执行测试的 instrumentation 类。 传送 -w 参数到如下命令 adb shell am instrument -e coverage true -w</td>
<td style="text-align:center">com.my.Pkg/com.my.Pkg.instrumentation.MyInstrumentation</td>
</tr>
<tr>
<td style="text-align:center">enablePerformanceLogging</td>
<td style="text-align:center">（仅适用于 Chrome 与 webview）开启 Chromedriver 的性能日志。（默认值为 false）</td>
<td style="text-align:center">true, false</td>
</tr>
<tr>
<td style="text-align:center">androidDeviceReadyTimeout</td>
<td style="text-align:center">用于等待设备在启动应用后准备就绪的超时时间。以秒为单位。</td>
<td style="text-align:center">例如 30</td>
</tr>
<tr>
<td style="text-align:center">androidInstallTimeout</td>
<td style="text-align:center">用于等待在设备中安装 apk 所花费的时间（以毫秒为单位）。默认值为 90000</td>
<td style="text-align:center">例如 90000</td>
</tr>
<tr>
<td style="text-align:center">adbPort</td>
<td style="text-align:center">用来连接 ADB 服务器的端口（默认值为 5037）</td>
<td style="text-align:center">5037</td>
</tr>
<tr>
<td style="text-align:center">androidDeviceSocket</td>
<td style="text-align:center">开发工具的 socket 名称。只有在被测应用是一个使用 Chromium 内核的浏览器时才需要。socket 会被浏览器打开，然后 Chromedriver 把它作为开发者工具来进行连接。</td>
<td style="text-align:center">例如 chrome_devtools_remote</td>
</tr>
<tr>
<td style="text-align:center">avd</td>
<td style="text-align:center">被启动 avd 的名字</td>
<td style="text-align:center">例如 api19</td>
</tr>
<tr>
<td style="text-align:center">avdLaunchTimeout</td>
<td style="text-align:center">用于等待 avd 启动并连接 ADB 的超时时间（以毫秒为单位），默认值为 120000。</td>
<td style="text-align:center">300000</td>
</tr>
<tr>
<td style="text-align:center">avdReadyTimeout</td>
<td style="text-align:center">用于等待 avd 完成启动动画的超时时间（以毫秒为单位），默认值为 120000。</td>
<td style="text-align:center">300000</td>
</tr>
<tr>
<td style="text-align:center">avdArgs</td>
<td style="text-align:center">启动 avd 时使用的额外参数</td>
<td style="text-align:center">例如 -netfast</td>
</tr>
<tr>
<td style="text-align:center">useKeystore</td>
<td style="text-align:center">使用自定义的 keystore 给 apk 签名，默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">keystorePath</td>
<td style="text-align:center">自定义 keystore 的路径, 默认路径为 ~/.android/debug.keystore</td>
<td style="text-align:center">例如 /path/to.keystore</td>
</tr>
<tr>
<td style="text-align:center">keystorePassword</td>
<td style="text-align:center">自定义 keystore 的密码</td>
<td style="text-align:center">例如 foo</td>
</tr>
<tr>
<td style="text-align:center">keyAlias</td>
<td style="text-align:center">key 的别名</td>
<td style="text-align:center">例如 androiddebugkey</td>
</tr>
<tr>
<td style="text-align:center">keyPassword</td>
<td style="text-align:center">key 的密码</td>
<td style="text-align:center">例如 foo</td>
</tr>
<tr>
<td style="text-align:center">chromedriverExecutable</td>
<td style="text-align:center">webdriver 可执行文件的绝对路径（如果 Chromium 内嵌一个自己提供的 webdriver，则应使用他去替换掉 Appium 自带的 chromedriver）</td>
<td style="text-align:center">/abs/path/to/webdriver</td>
</tr>
<tr>
<td style="text-align:center">autoWebviewTimeout</td>
<td style="text-align:center">用于等待 Webview 上下文（context）激活的时间（以毫秒为单位）。默认值为 2000</td>
<td style="text-align:center">例如 4</td>
</tr>
<tr>
<td style="text-align:center">intentAction</td>
<td style="text-align:center">用于启动 activity 的 intent action（默认值为 android.intent.action.MAIN)</td>
<td style="text-align:center">例如 android.intent.action.MAIN, android.intent.action.VIEW</td>
</tr>
<tr>
<td style="text-align:center">intentCategory</td>
<td style="text-align:center">用于启动 activity 的 intent category。（默认值为 android.intent.category.LAUNCHER)</td>
<td style="text-align:center">例如 android.intent.category.LAUNCHER, android.intent.category.APP_CONTACTS</td>
</tr>
<tr>
<td style="text-align:center">intentFlags</td>
<td style="text-align:center">用于启动 activity 的标识（flags）（默认值为 0x10200000）</td>
<td style="text-align:center">例如 0x10200000</td>
</tr>
<tr>
<td style="text-align:center">optionalIntentArguments</td>
<td style="text-align:center">用于启动 activity 的额外 intent 参数。请查看 <a href="cs_os_http:_developer.android.com_reference_android_content_intent" target="_blank">Intent 参数</a></td>
<td style="text-align:center">例如 --esn &lt;EXTRA_KEY&gt;, --ez &lt;EXTRA_KEY&gt; &lt;EXTRA_BOOLEAN_VALUE&gt;, 等等。</td>
</tr>
<tr>
<td style="text-align:center">dontStopAppOnReset</td>
<td style="text-align:center">在使用 adb 启动应用之前，不要终止被测应用的进程。如果被测应用是被其他钩子(anchor)应用所创建的，设置该参数为 false 后，就允许钩子(anchor)应用的进程在使用 adb 启动被测应用期间仍然存在。换而言之，设置 dontStopAppOnReset 为 true 后，我们在 adb shell am start 的调用中不需要包含 -S标识（flag）。忽略该 capability 或 设置为 false 的话，就需要包含 -S 标识（flag）。默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">unicodeKeyboard</td>
<td style="text-align:center">使用 Unicode 输入法。 默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">resetKeyboard</td>
<td style="text-align:center">在设定了 unicodeKeyboard 关键字的 Unicode 测试结束后，重置输入法到原有状态。如果单独使用，将会被忽略。默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">noSign</td>
<td style="text-align:center">跳过检查和对应用进行 debug 签名的步骤。仅适用于 UiAutomator，不适用于 selendroid。 默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">ignoreUnimportantViews</td>
<td style="text-align:center">调用 uiautomator 的函数 setCompressedLayoutHierarchy()。由于 Accessibility 命令在忽略部分元素的情况下执行速度会加快，这个关键字能加快测试执行的速度。被忽略的元素将不能够被找到，因此这个关键字同时也被实现成可以随时改变的 设置 ( settings )。 默认值为 false</td>
<td style="text-align:center">true 或 false</td>
</tr>
<tr>
<td style="text-align:center">disableAndroidWatchers</td>
<td style="text-align:center">禁用 android 监视器（watchers）。监视器用于见识应用程序的无响应状态（anr）和崩溃（crash），禁用会降低 Android 设备或模拟器的 CPU 使用率。该 capability 仅在使用 UiAutomator 时有效，不适用于 selendroid，默认设置为 false。</td>
<td style="text-align:center">true 或 false</td>
</tr>
<tr>
<td style="text-align:center">chromeOptions</td>
<td style="text-align:center">允许对 ChromeDriver 传 <a href="https://sites.google.com/a/chromium.org/chromedriver/capabilities" target="_blank">chromeOptions</a> 的参数。了解更多信息请查阅 chromeOptions</td>
<td style="text-align:center">chromeOptions: {args: ['--disable-popup-blocking']}</td>
</tr>
<tr>
<td style="text-align:center">recreateChromeDriverSessions</td>
<td style="text-align:center">当移除非 ChromeDriver webview时，终止掉 ChromeDriver 的 session。默认设置为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">nativeWebScreenshot</td>
<td style="text-align:center">在 web 的上下文（context），使用原生（native）的方法去截图，而不是用过代理的 ChromeDriver。默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">androidScreenshotPath</td>
<td style="text-align:center">在设备中截图被保存的目录名。默认值为 /data/local/tmp</td>
<td style="text-align:center">例如 /sdcard/screenshots/</td>
</tr>
<tr>
<td style="text-align:center">autoGrantPermissions</td>
<td style="text-align:center">让Appium自动确定您的应用需要哪些权限，并在安装时将其授予应用。默认设置为 false</td>
<td style="text-align:center">true或false</td>
</tr>
</tbody>
</table>
<p>iOS 独有</p>
<p>&lt;expand_table&gt;</p>
<table>
<thead>
<tr>
<th style="text-align:center">键</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">calendarFormat</td>
<td style="text-align:center">（仅支持模拟器） 为iOS的模拟器设置日历格式</td>
<td style="text-align:center">例如 gregorian</td>
</tr>
<tr>
<td style="text-align:center">bundleId</td>
<td style="text-align:center">被测应用的 bundle ID 。用于在真实设备中启动测试，也用于使用其他需要 bundle ID 的关键字启动测试。在使用 bundle ID 在真实设备上执行测试时，你可以不提供 app 关键字，但你必须提供 udid 。</td>
<td style="text-align:center">例如 io.appium.TestApp</td>
</tr>
<tr>
<td style="text-align:center">udid</td>
<td style="text-align:center">连接的真实设备的唯一设备编号 (Unique device identifier)</td>
<td style="text-align:center">例如 1ae203187fc012g</td>
</tr>
<tr>
<td style="text-align:center">launchTimeout</td>
<td style="text-align:center">以毫秒为单位，在 Appium 运行失败之前设置一个等待 instruments 的时间</td>
<td style="text-align:center">例如 20000</td>
</tr>
<tr>
<td style="text-align:center">locationServicesEnabled</td>
<td style="text-align:center">（仅支持模拟器）强制打开或关闭定位服务。默认值是保持当前模拟器的设定.</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">locationServicesAuthorized</td>
<td style="text-align:center">（仅支持模拟器）通过修改 plist 文件设定是否允许应用使用定位服务，从而避免定位服务的警告出现。默认值是保持当前模拟器的设定。请注意在使用这个关键字时，你同时需要使用 bundleId 关键字来发送你的应用的 bundle ID。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">autoAcceptAlerts</td>
<td style="text-align:center">当警告弹出的时候，都会自动去点接受。包括隐私访问权限的警告（例如 定位，联系人，照片）。默认值为 false。不支持基于 XCUITest 的测试。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">autoDismissAlerts</td>
<td style="text-align:center">当警告弹出的时候，都会自动去点取消。包括隐私访问权限的警告（例如 定位，联系人，照片）。默认值为 false。不支持基于 XCUITest 的测试。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">nativeInstrumentsLib</td>
<td style="text-align:center">使用原生 intruments 库（即关闭 instruments-without-delay）。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">nativeWebTap</td>
<td style="text-align:center">（仅支持模拟器）在Safari中允许“真实的"，非基于 javascript 的 web 点击 (tap) 。 默认值：false。注意：取决于 viewport 大小/比例， 点击操作不一定能精确地点中对应的元素。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">safariInitialUrl</td>
<td style="text-align:center">（仅支持模拟器） (&gt;= 8.1) 初始化 safari 的时使用的地址。默认是一个本地的欢迎页面</td>
<td style="text-align:center">例如 <a href="https://www.github.com" target="_blank">https://www.github.com</a></td>
</tr>
<tr>
<td style="text-align:center">safariAllowPopups</td>
<td style="text-align:center">（仅支持模拟器）允许 javascript 在 Safari 中创建新窗口。默认保持模拟器当前设置。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">safariIgnoreFraudWarning</td>
<td style="text-align:center">（仅支持模拟器）阻止 Safari 显示此网站可能存在风险的警告。默认保持浏览器当前设置。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">safariOpenLinksInBackground</td>
<td style="text-align:center">（仅支持模拟器）Safari 是否允许链接在新窗口打开。默认保持浏览器当前设置。</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">keepKeyChains</td>
<td style="text-align:center">（仅支持模拟器）当 Appium 会话开始/结束时是否保留存放密码存放记录 (keychains) 库(Library)/钥匙串(Keychains))</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">localizableStringsDir</td>
<td style="text-align:center">从哪里查找本地化字符串。默认值为 en.lproj</td>
<td style="text-align:center">en.lproj</td>
</tr>
<tr>
<td style="text-align:center">processArguments</td>
<td style="text-align:center">通过 instruments 传递到 AUT 的参数</td>
<td style="text-align:center">例如 -myflag</td>
</tr>
<tr>
<td style="text-align:center">interKeyDelay</td>
<td style="text-align:center">以毫秒为单位，按下每一个按键之间的延迟时间</td>
<td style="text-align:center">例如 100</td>
</tr>
<tr>
<td style="text-align:center">showIOSLog</td>
<td style="text-align:center">是否在 Appium 的日志中显示设备的日志。默认值为 false</td>
<td style="text-align:center">true或false</td>
</tr>
<tr>
<td style="text-align:center">sendKeyStrategy</td>
<td style="text-align:center">输入文字到文字框的策略。模拟器默认值：oneByOne(一个接着一个)。真实设备默认值：grouped (分组输入)</td>
<td style="text-align:center">oneByOne, grouped或setValue</td>
</tr>
<tr>
<td style="text-align:center">screenshotWaitTimeout</td>
<td style="text-align:center">以秒为单位，生成屏幕截图的最长等待时间。默认值为：10</td>
<td style="text-align:center">例如 5</td>
</tr>
<tr>
<td style="text-align:center">waitForAppScript</td>
<td style="text-align:center">用于判断 "应用是否被启动” 的 iOS 自动化脚本代码。默认情况下系统等待直到页面内容非空。结果必须是布尔类型。</td>
<td style="text-align:center">例如 true;, target.elements().length &gt; 0;, $.delay(5000); true;</td>
</tr>
<tr>
<td style="text-align:center">webviewConnectRetries</td>
<td style="text-align:center">用于获取 webview 失败时，发送连接信息到远程调试器的次数。默认次数为: 8</td>
<td style="text-align:center">例如 12</td>
</tr>
<tr>
<td style="text-align:center">appName</td>
<td style="text-align:center">被测应用的名字。 用于支持 iOS 9 以上系统的应用的自动化。</td>
<td style="text-align:center">例如 UICatalog</td>
</tr>
<tr>
<td style="text-align:center">customSSLCert</td>
<td style="text-align:center">(Sim/Emu-only) 给模拟器添加一个 SSL 证书。</td>
<td style="text-align:center">例如 -----BEGIN CERTIFICATE-----MIIFWjCCBEKg... -----END CERTIFICATE-----</td>
</tr>
</tbody>
</table>
<p><strong>Appium 引擎</strong></p>
<ul>
<li>
<p>Android —— uiautomator2</p>
</li>
<li>
<p>IOS —— xcuitest</p>
</li>
</ul>
<p>pip install Appium-Python-Client</p>
<p>需要先运行appium服务</p>
<pre data-syntax="python"><code class="lang-python hljs raw">from appium import webdriver

desired_caps = {
    "platformName": "Android",
    "platformVersion": "5.1.1",
    "deviceName": "BAHBBDB651228049",
    "appPackage": "me.weishu.exp",
    "appActivity": "me.weishu.exp.ui.MainActivity"
}

desired_caps['autoGrantPermissions'] = True  # 自动获取权限
desired_caps["noReset"] = True  # 不用每次重置

# 输入中文设置
# desired_caps ['unicodekeyboard'] = True
# desired_caps ['resetkeyboard'] True


driver = webdriver.Remote("http://127.0.0.1:4723/wd/hub", desired_caps)
print(driver.current_activity,driver.current_package)
driver.quit()

</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">adb shell getprop ro.build.version.release	版本号
adb shell dumpsys window windows | findstr mFocusedApp	包名/界面
aapt dump badging &lt; apk &gt; | findstr launchable-activity	启动页面

</code></pre>
<p>基本操作</p>
<p>quit()</p>
<p>start_activity(package，activity)	启动app</p>
<p>current_package	获取包名</p>
<p>current_activity	界面名</p>
<p>launch_app()</p>
<p>close_app()</p>
<p>terminate_app()</p>
<p>activate_app()</p>
<p>query_app_state()</p>
<p>install_app(app_path)</p>
<p>remove_app("包名")</p>
<p>is_app_installed()</p>
<p>​reset()</p>
<p>background_app(seconds)	将应用置于后台</p>
<p>implicitly_wait(seconds)</p>
<p>元素定位</p>
<p><strong>普通方式的定位</strong></p>
<ul>
<li>
<p>driver.find_element_by_accessibility_id() 	content-desc</p>
</li>
<li>
<p>driver.find_element_by_id() 	resource-id</p>
</li>
<li>
<p>driver.find_element_by_name() 	text</p>
</li>
<li>
<p>driver.find_element_by_xpath() 	xpath</p>
</li>
</ul>
<p>element改为elements是找所有满足的条件，返回数组。</p>
<p>MobileBy<strong> 的定位方式</strong></p>
<p>from appium.webdriver.common.mobileby import MobileBy</p>
<ul>
<li>
<p>self.driver.find_element(MobileBy.ID,"")</p>
</li>
<li>
<p>self.driver.find_element(MobileBy.XPATH,"")</p>
</li>
<li>
<p>self.driver.find_element(MobileBy.ACCESSIBILITY_ID,"")</p>
</li>
<li>
<p>self.driver.find_element(MobileBy.NAME,"")</p>
</li>
</ul>
<p><strong>元素的常用方法</strong></p>
<ul>
<li>
<p>点击方法：element.click()</p>
</li>
<li>
<p>输入操作：element.send_keys(string)</p>
</li>
<li>
<p>设置元素的值：element.set_value(string)</p>
</li>
<li>
<p>清除操作：element.clear()</p>
</li>
<li>
<p>是否可见：element.is_displayed</p>
</li>
<li>
<p>是否可用：element.enabled()</p>
</li>
<li>
<p>是否被选中：element.is_selected()</p>
</li>
<li>
<p>获取属性值：element.get_attribute(name)</p>
</li>
<li>
<p>driver.swipe(start_x,start_y,end_x,end_y,duration=None)</p>
</li>
<li>
<p>driver.drag_and_drop(origin_el,des_el)</p>
</li>
<li>
<p>driver.scroll(origin_el,des_el)</p>
</li>
</ul>
<p><strong>元素常用的属性</strong></p>
<ul>
<li>
<p>获取元素文本：element.text</p>
</li>
<li>
<p>获取元素坐标：element.location</p>
</li>
<li>
<p>获取元素尺寸（高和宽）：element.size</p>
</li>
</ul>
<p>driver.get_window_size()	获取手机分辨率</p>
<p>driver.get_screenshot_as_file()	截图</p>
<p>driver.network_connection	获取手机网络（1：飞行模式 2：只开wifi 4：只开流量 6：网络全开）</p>
<p>driver.set_network_connection(connection_type)	设置网络</p>
<p>driver.press_keycode(keycode,metastate=None)	发送键到设备</p>
<p>driver.open_notifications()	点击通知消息</p>
<p>UIAutomator 查找元素</p>
<p><strong>优缺点</strong></p>
<ul>
<li>
<p>优点</p>
</li>
<li>
<p>xpath 定位速度慢</p>
</li>
<li>
<p>UIAutomator 是 Android 的工作引擎，速度快</p>
</li>
<li>
<p>滚动查找很方便</p>
</li>
<li>
<p>缺点</p>
</li>
<li>
<p>表达式书写复杂，容易写错 IDE 没有提示</p>
</li>
</ul>
<p><strong>定位方式</strong></p>
<ul>
<li>
<p>通过 resource-id 定位</p>
</li>
<li>
<p>通过 classname 定位</p>
</li>
<li>
<p>通过 content-desc 定位</p>
</li>
<li>
<p>通过文本定位</p>
</li>
<li>
<p>组合定位</p>
</li>
<li>
<p>通过父子关系定位</p>
</li>
</ul>
<p><strong>用法</strong></p>
<ul>
<li>
<p>driver.find_element_by_android_uiautomator("表达式")</p>
</li>
<li>
<p>注：外层要用单引号，内层的字符串用双引号，Java 双引号表示字符串</p>
</li>
<li>
<p>通过文本定位</p>
</li>
<li>
<p>new UiSelector().text("text文本")</p>
</li>
<li>
<p>通过 textContains 模糊匹配</p>
</li>
<li>
<p>new UiSelector().textContains("text文本")</p>
</li>
<li>
<p>通过某个文本开头匹配</p>
</li>
<li>
<p>new UiSelector().textStartWith("text文本")</p>
</li>
<li>
<p>正则表达式匹配</p>
</li>
<li>
<p>new UiSelector().textMatches("text文本")</p>
</li>
<li>
<p>组合定位</p>
</li>
<li>
<p>比如 id 与 text 的属性组合：driver.find_element_by_android_uiautomator('new UiSelector().resourceId("com.xueqiu.android:id/login_account").text("我的")')</p>
</li>
<li>
<p>父子关系定位:childSelector，先定位到父类，再用 childSelector 来定位子类</p>
</li>
<li>
<p>driver.find_element_by_android_uiautomator('new UiSelector().resourceId("com.xueqiu.android:id/login_account").childSelector(text("股票"))')</p>
</li>
<li>
<p>兄弟定位：fromParent</p>
</li>
<li>
<p>driver.find_element_by_android_uiautomator('new UiSelector().resourceId("com.xueqiu.android:id/login_account").fromParent(text("股票"))')</p>
</li>
</ul>
<p><strong>滑动元素查找</strong></p>
<ul>
<li>
<p>有一些页面有持续滑动的能力，比如微博，没有分页，可以一直滑动，UIAutomator 提供了滑动的很好的方法。</p>
</li>
<li>
<p>driver.find_element_by_android_uiautomator(‘new UiScrollable(new UiSelector().’</p>
</li>
</ul>
<p>‘scrollable(true).instance(0)).’</p>
<p>‘scrollIntoView(new UiSelector().textContains(“病人”).’</p>
<p>‘instance(0));’).click()</p>
<p>模拟操作</p>
<p><strong>TouchAction(driver)</strong></p>
<ul>
<li>
<p>tap(element=None,x=None,y=None,count =1)	轻敲</p>
</li>
<li>
<p>press(el=None,x=None,y=None)按下</p>
</li>
<li>
<p>release(el=None,x=None,y=None)	抬起</p>
</li>
<li>
<p>wait(mseconds)	释放</p>
</li>
<li>
<p>long_press(el=None,x=None,y=None,duration=1000)	长按</p>
</li>
<li>
<p>move_to(x=None,y=None)	移动</p>
</li>
</ul>
<p>webview</p>
<p>webview页面class属性值= android.webkit.webview</p>
<p>获取所有contexts包括原生页面和webview</p>
<p>driver.contexts</p>
<p>获取当前context</p>
<p>driver.current_context</p>
<p>进入webview页面</p>
<p>driver. switch_to. context()</p>
<p>toast</p>
<p>启动参数中添加一个参数</p>
<p>automationName": "Uiautomator2" #获取toast</p>
<p>操作触发toast出现的元素</p>
<p>获取toast，借助selenium中显式等待WebDriverWait类</p>
<p>小程序</p>
<p>获取小程序在微信中的进程</p>
<ol>
<li>
<p>adb shell</p>
</li>
<li>
<p>dumpsus activity top | grep ACTIVITY	# pid</p>
</li>
<li>
<p>ps pid</p>
</li>
</ol>
<p>得到微信小程序进程 com.tencent.mm:appbrand0</p>
<p>启动参数中添加微信小程序进程</p>
<p>"chromeOptions": {"androidProcess": "com. tencent. mm: appbzango"}</p>
<p>appium的ChromeDriver目录：appium\node_modules\appium-chromedriver\chromedriver\win</p>
<p>'chromeOptions': {'androidProcess': 'com.vitalerter'},</p>
<p>Webview debug</p>
<p>adb 连接 手机或模拟器</p>
<p>chrome://inspect</p>
<p>对于内核版本不一致需要vpn</p>
<h1><a href="https://hyb1996.github.io/AutoJs-Docs/#/" target="_blank">Auto.js</a></h1>
<p>基于 JavaScript 语言运行在Android平台上的脚本框架，使用<a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/Rhino" target="_blank">Rhino 1.7.7.2</a>作为脚本引擎，支持ES5与部分ES6特性</p>
<p>工作原理是基于辅助服务AccessibilityService</p>
<p><a href="https://github.com/hyb1996/Auto.js-VSCode-Extension" target="_blank">Auto.js-VSCodeExt</a></p>
<ul>
<li>
<p>Start Server: 启动插件服务。确保手机和电脑在同一区域网的情况下，在Auto.js的侧拉菜单中使用连接电脑功能连接。</p>
</li>
<li>
<p>Stop Server: 停止插件服务。</p>
</li>
<li>
<p>Run 运行当前编辑器的脚本。如果有多个设备连接，则在所有设备运行。</p>
</li>
<li>
<p>Rerun 停止当前文件对应的脚本并重新运行。如果有多个设备连接，则在所有设备重新运行。</p>
</li>
<li>
<p>Stop 停止当前文件对应的脚本。如果有多个设备连接，则在所有设备停止。</p>
</li>
<li>
<p>StopAll 停止所有正在运行的脚本。如果有多个设备连接，则在所有设备运行所有脚本。</p>
</li>
<li>
<p>Save 保存当前文件到手机的脚本默认目录（文件名会加上前缀remote)。如果有多个设备连接，则在所有设备保存。</p>
</li>
<li>
<p>RunOnDevice: 弹出设备菜单并在指定设备运行脚本。</p>
</li>
<li>
<p>SaveToDevice: 弹出设备菜单并在指定设备保存脚本。</p>
</li>
<li>
<p>New Project（新建项目）：选择一个空文件夹（或者在文件管理器中新建一个空文件夹），将会自动创建一个项目</p>
</li>
<li>
<p>Run Project（运行项目）：运行一个项目，需要Auto.js 4.0.4Alpha5以上支持</p>
</li>
<li>
<p>Save Project（保存项目）：保存一个项目，需要Auto.js 4.0.4Alpha5以上支持</p>
</li>
</ul>
<h1><a href="https://github.com/Genymobile/scrcpy" target="_blank">scrcpy</a></h1>
<p>特点</p>
<ul>
<li>
<p>轻量 (原生，仅显示设备屏幕)</p>
</li>
<li>
<p>性能 (30~60fps)</p>
</li>
<li>
<p>质量 (分辨率可达 1920×1080 或更高)</p>
</li>
<li>
<p>低延迟 (35~70ms)</p>
</li>
<li>
<p>快速启动 (最快 1 秒内即可显示第一帧)</p>
</li>
<li>
<p>无侵入性 (不会在设备上遗留任何程序)</p>
</li>
</ul>
<p>确保设备已<a href="https://developer.android.com/studio/command-line/adb.html#Enabling" target="_blank">开启 adb 调试</a>后，运行scrcpy</p>
<p>Option</p>
<ul>
<li>
<pre><code>--always-on-top
</code></pre>
</li>
<li>
<pre><code>-b, --bit-rate value
</code></pre>
</li>
<li>
<pre><code>--codec-options key[:type]=value[,...]
</code></pre>
</li>
<li>
<pre><code>--crop width:height:x:y
</code></pre>
</li>
<li>
<pre><code>--disable-screensaver
</code></pre>
</li>
<li>
<pre><code>--display id
</code></pre>
</li>
<li>
<pre><code>--encoder name
</code></pre>
</li>
<li>
<pre><code>--force-adb-forward
</code></pre>
</li>
<li>
<pre><code>--forward-all-clicks
</code></pre>
</li>
<li>
<pre><code>-f, --fullscreen
</code></pre>
</li>
<li>
<pre><code>--legacy-paste
</code></pre>
</li>
<li>
<pre><code>--lock-video-orientation value	锁定屏幕方向
</code></pre>
</li>
<li>
<pre><code>--max-fps value
</code></pre>
</li>
<li>
<pre><code>-m, --max-size value
</code></pre>
</li>
<li>
<pre><code>-n, --no-control
</code></pre>
</li>
<li>
<pre><code>-N, --no-display
</code></pre>
</li>
<li>
<pre><code>--no-key-repeat
</code></pre>
</li>
<li>
<pre><code>--no-mipmaps
</code></pre>
</li>
<li>
<pre><code>-p, --port port[:port]
</code></pre>
</li>
<li>
<pre><code>--prefer-text
</code></pre>
</li>
<li>
<pre><code>--push-target path
</code></pre>
</li>
<li>
<pre><code>-r, --record file.mp4
</code></pre>
</li>
<li>
<pre><code>--record-format format
</code></pre>
</li>
<li>
<pre><code>--render-driver name
</code></pre>
</li>
<li>
<pre><code>--render-expired-frames
</code></pre>
</li>
<li>
<pre><code>--rotation value
</code></pre>
</li>
<li>
<pre><code>-s, --serial serial
</code></pre>
</li>
<li>
<pre><code>--shortcut-mod key[+...]][,...]

  Specify the modifiers to use for scrcpy shortcuts.

  Possible keys are "lctrl", "rctrl", "lalt", "ralt", "lsuper" and "rsuper".
</code></pre>
</li>
<li>
<pre><code>-S, --turn-screen-off
</code></pre>
</li>
<li>
<pre><code>-t, --show-touches
</code></pre>
</li>
<li>
<pre><code>-V, --verbosity value	Set the log level (debug, info, warn or error).
</code></pre>
</li>
<li>
<pre><code>-w, --stay-awake
</code></pre>
</li>
<li>
<pre><code>--window-borderless
</code></pre>
</li>
<li>
<pre><code>--window-title text
</code></pre>
</li>
<li>
<pre><code>--window-x value
</code></pre>
</li>
<li>
<pre><code>--window-y value
</code></pre>
</li>
<li>
<pre><code>--window-width value
</code></pre>
</li>
<li>
<pre><code>--window-height value
</code></pre>
</li>
</ul>
<p><strong>快捷键</strong></p>
<p>MOD 是快捷键的修饰键， 默认是 (左) Alt 或 (左) Super</p>
<table>
<thead>
<tr>
<th style="text-align:center">操作</th>
<th style="text-align:center">快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">全屏</td>
<td style="text-align:center">MOD+f</td>
</tr>
<tr>
<td style="text-align:center">向左旋转屏幕</td>
<td style="text-align:center">MOD+← (左箭头)</td>
</tr>
<tr>
<td style="text-align:center">向右旋转屏幕</td>
<td style="text-align:center">MOD+→ (右箭头)</td>
</tr>
<tr>
<td style="text-align:center">将窗口大小重置为1:1 (匹配像素)</td>
<td style="text-align:center">MOD+g</td>
</tr>
<tr>
<td style="text-align:center">将窗口大小重置为消除黑边</td>
<td style="text-align:center">MOD+w</td>
</tr>
<tr>
<td style="text-align:center">点按 主屏幕</td>
<td style="text-align:center">MOD+h</td>
</tr>
<tr>
<td style="text-align:center">点按 返回</td>
<td style="text-align:center">MOD+b</td>
</tr>
<tr>
<td style="text-align:center">点按 切换应用</td>
<td style="text-align:center">MOD+s</td>
</tr>
<tr>
<td style="text-align:center">点按 菜单 (解锁屏幕)</td>
<td style="text-align:center">MOD+m</td>
</tr>
<tr>
<td style="text-align:center">点按 音量+</td>
<td style="text-align:center">MOD+↑ (上箭头)</td>
</tr>
<tr>
<td style="text-align:center">点按 音量-</td>
<td style="text-align:center">MOD+↓ (下箭头)</td>
</tr>
<tr>
<td style="text-align:center">点按 电源</td>
<td style="text-align:center">MOD+p</td>
</tr>
<tr>
<td style="text-align:center">打开屏幕</td>
<td style="text-align:center">鼠标右键²</td>
</tr>
<tr>
<td style="text-align:center">关闭设备屏幕 (但继续在电脑上显示)</td>
<td style="text-align:center">MOD+o</td>
</tr>
<tr>
<td style="text-align:center">打开设备屏幕</td>
<td style="text-align:center">MOD+Shift+o</td>
</tr>
<tr>
<td style="text-align:center">旋转设备屏幕</td>
<td style="text-align:center">MOD+r</td>
</tr>
<tr>
<td style="text-align:center">展开通知面板</td>
<td style="text-align:center">MOD+n</td>
</tr>
<tr>
<td style="text-align:center">收起通知面板</td>
<td style="text-align:center">MOD+Shift+n</td>
</tr>
<tr>
<td style="text-align:center">复制到剪贴板³</td>
<td style="text-align:center">MOD+c</td>
</tr>
<tr>
<td style="text-align:center">剪切到剪贴板³</td>
<td style="text-align:center">MOD+x</td>
</tr>
<tr>
<td style="text-align:center">同步剪贴板并粘贴³</td>
<td style="text-align:center">MOD+v</td>
</tr>
<tr>
<td style="text-align:center">注入电脑剪贴板文本</td>
<td style="text-align:center">MOD+Shift+v</td>
</tr>
<tr>
<td style="text-align:center">打开/关闭FPS显示 (在 stdout)</td>
<td style="text-align:center">MOD+i</td>
</tr>
<tr>
<td style="text-align:center">捏拉缩放</td>
<td style="text-align:center">Ctrl+按住并移动鼠标</td>
</tr>
</tbody>
</table>
