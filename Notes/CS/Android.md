
# —— Android ——
App类型

- 原生应用（native application）	专门为特定手机平台开发的应用程序 ，无法在其他平台运行
- Web 应用（web application）
- 混合应用（hybrid application）	分三层：HTML5 网页层、网页引擎层（本质是一个隔离的浏览器实例）、容器层。

操作系统的架构

- 应用程序层
- 应用程序框架层
- 核心类库
- Linux 内核

![](http://c.biancheng.net/uploads/allimg/190327/5-1Z32G5124H60.gif#crop=0&crop=0&crop=1&crop=1&id=CegQR&originHeight=517&originWidth=799&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

应用程序框架层

| 系统/服务 | 英文名称 | 说明 |
| --- | --- | --- |
| 视图 | View | 丰富的、可扩展的视图集合，用于构建一个应用程序，包括列表 (Lists)、网格 (Grids)、文本框 (TextBoxes)、按钮 (Buttons)，甚至是内嵌的 Web 浏览器。 |
| 内容管理器 | Content Provider | 使应用可以访问另一个应用的数据或者共享自己的数据。 |
| 资源管理器 | Resource Manager | 提供访问非代码资源，如本地字符串、图形和分层文件 (layout files) |
| 通知管理器 | Notification Manager | 使所有的应用程序都能够在状态栏显示通知信息。 |
| 活动管理器 | Activity  Manager | 管理应用程序生命周期，并且提供通用的导航回退功能。 |

**应用程序层**  <br />  **四大组件**

- Activity：用户和应用程序交互的窗口
- Service：实现程序后台运行的解决方案
- Content Provide：内容提供者，提供程序所需要的数据
- Broadcast Receiver：广播接收器，监听外部事件的到来

# UI
引入布局
```java
<include layout="@layout/title" />
```
自定义控件
```javascript
<com.uicustomviews.TitleLayout
     android:layout_width="match_parent"
     android:layout_height="wrap_content" />
       
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
```


**Android 的布局**  <br />  通过容器的布局属性来管理子控件的位置关系

- 线性布局：LinearLayout
- 相对布局：RelativeLayout
- 帧布局：FrameLayout
- 绝对布局：AbsoluteLayout
- 表格布局：TableLayout
- 网格布局：GirdLayout
- 约束布局：ConstraintLayout



**Android 常用的控件**

- TextView：文本控件
- EditText：可编辑文本控件
- Button：按钮
- ImageButton：图标按钮
- ToggleButton:开关按钮
- ImageView：图片控件
- CheckBox：复选框控件
- RadioButton：单选框控件

## [应用资源](https://developer.android.google.cn/guide/topics/resources/providing-resources?hl=zh-cn)
res

- drawable	图片
- mipmap 	应用图标
- values	字符串、样式、颜色等配置
- layout	布局文件
| 目录 | 资源类型 |
| --- | --- |
| animator/ | 用于定义[属性动画](https://developer.android.google.cn/guide/topics/graphics/prop-animation?hl=zh-cn)的 XML 文件。 |
| anim/ | 用于定义[渐变动画](https://developer.android.google.cn/guide/topics/graphics/view-animation?hl=zh-cn#tween-animation)的 XML 文件 |
| color/ | 用于定义颜色状态列表的 XML 文件。[颜色状态列表资源](https://developer.android.google.cn/guide/topics/resources/color-list-resource?hl=zh-cn) |
| drawable/ | 位图文件（.png、.9.png、.jpg、.gif） |
| mipmap/ | 启动器图标。[管理项目概览](https://developer.android.google.cn/tools/projects?hl=zh-cn#mipmap)。 |
| layout/ | 用于定义用户界面布局的 XML 文件。请参阅[布局资源](https://developer.android.google.cn/guide/topics/resources/layout-resource?hl=zh-cn)。 |
| menu/ | 用于定义应用菜单（如选项菜单、上下文菜单或子菜单）的 XML 文件。请参阅[菜单资源](https://developer.android.google.cn/guide/topics/resources/menu-resource?hl=zh-cn)。 |
| raw/ | 需以原始形式保存的任意文件。 |
| values/ | 包含字符串、整型数和颜色等简单值的 XML 文件。  <br />  arrays.xml：资源数组（类型数组）。  <br />  colors.xml：颜色值。  <br />  dimens.xml：尺寸值。  <br />  strings.xml：字符串值。  <br />  styles.xml：样式。  <br />  请参阅字符串资源、样式资源和更多资源类型。 |
| xml/ | 可在运行时通过调用 [Resources.getXML()](https://developer.android.google.cn/reference/android/content/res/Resources?hl=zh-cn#getXml(int)) 读取的任意 XML 文件。各种 XML 配置文件（如[可搜索配置](https://developer.android.google.cn/guide/topics/search/searchable-config?hl=zh-cn)）都必须保存在此处。 |
| font/ | 带有扩展名的字体文件（如 .ttf、.otf 或 .ttc），或包含 <font-family> 元素的 XML 文件。如需详细了解作为资源的字体，请参阅 [XML 中的字体](https://developer.android.google.cn/preview/features/fonts-in-xml?hl=zh-cn)。 |

访问资源的方法

- 在代码中	[<package_name>.]R.<resource_type>.<resource_name>	R.string.app_name
- 在XML中	@[<package_name>:]<resource_type>/<resource_name>	@string/app_name

单位

- px	pixe，像素。一个像素单位对应一个屏幕像素单位。不推荐使用px，不会根据屏幕密度自动缩放。
- dp	density-independent pixel，密度无关像素。1dp在设备屏幕上总是等于1/160英寸。
- sp	scale-independent pixel，缩放无关像素。通常用来设置屏幕上的字体大小。

**AndroidManifest.xml**

| [<action>](https://developer.android.google.cn/guide/topics/manifest/action-element?hl=zh-cn) | 向 Intent 过滤器添加操作。 |
| --- | --- |
| [<activity>](https://developer.android.google.cn/guide/topics/manifest/activity-element?hl=zh-cn) | 声明 Activity 组件。 |
| [<activity-alias>](https://developer.android.google.cn/guide/topics/manifest/activity-alias-element?hl=zh-cn) | 声明 Activity 的别名。 |
| [<application>](https://developer.android.google.cn/guide/topics/manifest/application-element?hl=zh-cn) | 应用的声明。 |
| [<category>](https://developer.android.google.cn/guide/topics/manifest/category-element?hl=zh-cn) | 向 Intent 过滤器添加类别名称。 |
| [<compatible-screens>](https://developer.android.google.cn/guide/topics/manifest/compatible-screens-element?hl=zh-cn) | 指定与应用兼容的每个屏幕配置。 |
| [<data>](https://developer.android.google.cn/guide/topics/manifest/data-element?hl=zh-cn) | 向 Intent 过滤器添加数据规范。 |
| [<grant-uri-permission>](https://developer.android.google.cn/guide/topics/manifest/grant-uri-permission-element?hl=zh-cn) | 指定父级内容提供程序有权访问的应用数据的子集。 |
| [<instrumentation>](https://developer.android.google.cn/guide/topics/manifest/instrumentation-element?hl=zh-cn) | 声明支持您监控应用与系统进行交互的 Instrumentation 类。 |
| [<intent-filter>](https://developer.android.google.cn/guide/topics/manifest/intent-filter-element?hl=zh-cn) | 指定 Activity、服务或广播接收器可以响应的 Intent 类型。 |
| [<manifest>](https://developer.android.google.cn/guide/topics/manifest/manifest-element?hl=zh-cn) | AndroidManifest.xml 文件的根元素。 |
| [<meta-data>](https://developer.android.google.cn/guide/topics/manifest/meta-data-element?hl=zh-cn) | 可以提供给父级组件的其他任意数据项的名称-值对。 |
| [<path-permission>](https://developer.android.google.cn/guide/topics/manifest/path-permission-element?hl=zh-cn) | 定义内容提供程序中特定数据子集的路径和所需权限。 |
| [<permission>](https://developer.android.google.cn/guide/topics/manifest/permission-element?hl=zh-cn) | 声明安全权限，可用于限制对此应用或其他应用的特定组件或功能的访问。 |
| [<permission-group>](https://developer.android.google.cn/guide/topics/manifest/permission-group-element?hl=zh-cn) | 为相关权限的逻辑分组声明名称。 |
| [<permission-tree>](https://developer.android.google.cn/guide/topics/manifest/permission-tree-element?hl=zh-cn) | 声明权限树的基本名称。 |
| [<provider>](https://developer.android.google.cn/guide/topics/manifest/provider-element?hl=zh-cn) | 声明内容提供程序组件。 |
| [<receiver>](https://developer.android.google.cn/guide/topics/manifest/receiver-element?hl=zh-cn) | 声明广播接收器组件。 |
| [<service>](https://developer.android.google.cn/guide/topics/manifest/service-element?hl=zh-cn) | 声明服务组件。 |
| [<supports-gl-texture>](https://developer.android.google.cn/guide/topics/manifest/supports-gl-texture-element?hl=zh-cn) | 声明应用支持的一种 GL 纹理压缩格式。 |
| [<supports-screens>](https://developer.android.google.cn/guide/topics/manifest/supports-screens-element?hl=zh-cn) | 声明应用支持的屏幕尺寸，并为大于此尺寸的屏幕启用屏幕兼容模式。 |
| [<uses-configuration>](https://developer.android.google.cn/guide/topics/manifest/uses-configuration-element?hl=zh-cn) | 指明应用要求的特定输入功能。 |
| [<uses-feature>](https://developer.android.google.cn/guide/topics/manifest/uses-feature-element?hl=zh-cn) | 声明应用使用的单个硬件或软件功能。 |
| [<uses-library>](https://developer.android.google.cn/guide/topics/manifest/uses-library-element?hl=zh-cn) | 指定应用必须链接到的共享库。 |
| [<uses-permission>](https://developer.android.google.cn/guide/topics/manifest/uses-permission-element?hl=zh-cn) | 指定为使应用正常运行，用户必须授予的系统权限。 |
| [<uses-permission-sdk-23>](https://developer.android.google.cn/guide/topics/manifest/uses-permission-sdk-23-element?hl=zh-cn) | 指明应用需要特定权限，但仅当应用在运行 Android 6.0（API 级别 23）或更高版本的设备上安装时才需要。 |
| [<uses-sdk>](https://developer.android.google.cn/guide/topics/manifest/uses-sdk-element?hl=zh-cn) | 您可以通过整数形式的 API 级别，表示应用与一个或多个版本的 Android 平台的兼容性。 |

Android中的日志工具类是Log（android.util.Log）

- Log.v(tag, msg)
- Log.d()
- Log.i()
- Log.w()
- Log.e()

## [Activity](https://developer.android.google.cn/reference/android/app/Activity)
[Activity](https://developer.android.google.cn/reference/android/app/Activity?hl=zh-cn) 类是 Android 应用的关键组件，而 Activity 的启动和组合方式则是该平台应用模型的基本组成部分。

| 名称 | 调用时间 |
| --- | --- |
| onCreate(Bundle savedInstanceState) | 创建 Activity 时调用。  设置在该方法中，还以 Bundle 的形式提供对以前储存的任何状态的访问。其中参数 savedInstanceState 对象是用于保存 Activity 的对象的状态。 |
| onStart() | Activity 变为在屏幕上对用户可见时调用。 |
| onResume() | Activity 开始与用户交互时调用（无论是启动还是重启一个活动，该方法总是被调用）。 |
| onPause() | 当 Android 系统要激活其他 Activity 时，该方法被调用，暂停或收回 CPU 和其他资源时调用。 |
| onStop() | Activity 被停止并转为不可见阶段时调用。 |
| onRestart() | 重新启动已经停止的 Activity 时调用。 |
| onDestroy() | Activity 被完全从系统内存中移除时调用。  该方法被调用可能是因为有人直接调用 finish() 方法或者系统决定停止该活动以释放资源。 |

![](https://developer.android.google.cn/guide/components/images/activity_lifecycle.png#crop=0&crop=0&crop=1&crop=1&id=GUirm&originHeight=663&originWidth=513&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  活动间数据传递
```javascript
public class ParentActivity extends AppCompatActivity {
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
```

[Fragment](https://developer.android.google.cn/reference/androidx/fragment/app/Fragment?hl=zh-cn) 表示应用界面中可重复使用的一部分  <br />  ![](https://developer.android.google.cn/images/guide/fragments/fragment-view-lifecycle.png?hl=zh-cn#crop=0&crop=0&crop=1&crop=1&id=yizdq&originHeight=1004&originWidth=821&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
```java
public class LeftFragment extends Fragment {
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
```

## [Intent](https://developer.android.google.cn/guide/components/intents-filters?hl=zh-cn)
[Intent](https://developer.android.google.cn/reference/android/content/Intent?hl=zh-cn)是一个消息传递对象，可以用来从其他应用组件请求操作

- 显式 Intent：通过提供目标应用的软件包名称或完全限定的组件类名来指定可处理 Intent 的应用。
```java
// Executed in an Activity, so 'this' is the Context
// The fileUrl is a string URL, such as "http://www.example.com/image.png"
Intent downloadIntent = new Intent(this, DownloadService.class);
downloadIntent.setData(Uri.parse(fileUrl));
startService(downloadIntent);
```

- 隐式 Intent ：不会指定特定的组件，而是声明要执行的常规操作，从而允许其他应用中的组件来处理。
```java
// Create the text message with a string
Intent sendIntent = new Intent();
sendIntent.setAction(Intent.ACTION_SEND);
sendIntent.putExtra(Intent.EXTRA_TEXT, textMessage);
sendIntent.setType("text/plain");

// Verify that the intent will resolve to an activity
if (sendIntent.resolveActivity(getPackageManager()) != null) {
    startActivity(sendIntent);
}
```
接收
```java
<activity android:name="ShareActivity">
    <intent-filter>
        <action android:name="android.intent.action.SEND"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:mimeType="text/plain"/>
    </intent-filter>
</activity>
```


## [服务](https://developer.android.google.cn/guide/components/services?hl=zh-cn)
[Service](https://developer.android.google.cn/reference/android/app/Service?hl=zh-cn) 是一种可在后台执行长时间运行操作而不提供界面的应用组件
```java
public class MyService extends Service {

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
```


## [权限](https://developer.android.google.cn/guide/topics/permissions/overview?hl=zh-cn)
安装时权限  <br />  运行时权限
```java
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
                if (grantResults.length > 0 && grantResults[0] == PackageManager.
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
```
特殊权限	与特定的应用操作相对应。只有平台和原始设备制造商 (OEM) 可以定义特殊权限


## 数据存储

- [数据和文件存储概览](https://developer.android.google.cn/guide/topics/data/data-storage?hl=zh-cn)



**文件存储**  <br />  默认目录：`/data/data/<package name>/files/<file>`  <br />  文件的操作模式: MODE_PRIVATE、MODE_APPEND
```java
// 存
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
```


**SharedPreferences存储**  <br />  使用键值对的方式来存储数据  <br />  默认目录：`/data/data/<package name>/shared_prefs/<filename.xml>`  <br />  文件操作模式：MODE_PRIVATE

写
```java
SharedPreferences.Editor editor = getSharedPreferences("filename",MODE_PRIVATE).edit();
editor.putString("name", "Tom");
editor.putInt("age", 28);
editor.putBoolean("married", false);
editor.apply();
```
读
```java
SharedPreferences pref = getSharedPreferences("filename", MODE_PRIVATE);
String name = pref.getString("name", "");
int age = pref.getInt("age", 0);
boolean married = pref.getBoolean("married", false);
```


## 内容提供器（Content Provider）
实现跨程序共享数据，同时保证被访数据的安全性。
```javascript
public class DatabaseProvider extends ContentProvider {
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
```
```kotlin
class MainActivity : AppCompatActivity() {
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
```


## [广播](https://developer.android.google.cn/guide/components/broadcasts?hl=zh-cn)

- 标准广播 （Normal broadcasts）是一种完全异步执行的广播，在广播发出之后，所有的广播接收器几乎都会在同一时刻接收到这条广播消息
- 有序广播 （Ordered broadcasts）则是一种同步执行的广播，在广播发出之后，同一时刻只会有一个广播接收器能够收到这条广播消息

接收系统广播  <br />  	动态注册监听网络变化  <br />  	`<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />`
```javascript
public class MainActivity extends AppCompatActivity {
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
			if (networkInfo != null && networkInfo.isAvailable()) {
				Toast.makeText(context, "network is available",
				Toast.LENGTH_SHORT).show();
			} else {
				Toast.makeText(context, "network is unavailable",
				Toast.LENGTH_SHORT).show();
			}
		}
	}
}
```

静态注册实现开机启动
```javascript
public class BootCompleteReceiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		Toast.makeText(context, "Boot Complete", Toast.LENGTH_LONG).show();
	}
}
```
```xml
<application
     android:allowBackup="true"
     android:icon="@mipmap/ic_launcher"
     android:label="@string/app_name"
     android:supportsRtl="true"
     android:theme="@style/AppTheme">
  ...
  <receiver
      android:name=".BootCompleteReceiver"
      android:enabled="true"
      android:exported="true">
    <intent-filter>
      <action android:name="android.intent.action.BOOT_COMPLETED" />
    </intent-filter>
  </receiver>
</application>
```
自定义广播
```javascript
public class MyBroadcastReceiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		Toast.makeText(context, "received in MyBroadcastReceiver", Toast.LENGTH_
		SHORT).show();
	}
}
```
```java
<receiver
	android:name=".MyBroadcastReceiver"
	android:enabled="true"
	android:exported="true">
	<intent-filter>
		<action android:name="com.example.broadcasttest.MY_BROADCAST"/>
	</intent-filter>
</receiver>
```
```java
Intent intent = new Intent("com.example.broadcasttest.MY_BROADCAST");
// 默认情况下发出的自定义广播是隐式广播
// 调用setPackage()方法，指定广播发送给哪个应用程序的，从而让它变成一条显式广播
intent.setPackage(getpackageName()))
sendBroadcast(intent);
sendOrderedBroadcast(intent, null);
```

广播截断，以阻止其继续传播
```java
abortBroadcast();
```

本地广播
```javascript
public class MainActivity extends AppCompatActivity {
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
```


## Notification
```java
Intent intent = new Intent(this, NotificationActivity.class);
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
```

- setSound(Uri.fromFile(new File("/system/media/audio/ringtones/Luna.ogg")))
- setVibrate(new long[] {0, 1000, 1000, 1000 })
- setLights(Color.GREEN, 1000, 1000)
- setDefaults(NotificationCompat.DEFAULT_ALL)
- setStyle(new NotificationCompat.BigPictureStyle().bigPicture(BitmapFactory.decodeResource(getResources(), R.drawable.big_image)))
- setPriority(NotificationCompat.PRIORITY_MAX)
   - PRIORITY_DEFAULT
   - PRIORITY_MIN
   - PRIORITY_LOW
   - PRIORITY_HIGH
   - PRIORITY_MAX


## 多媒体
功能声明
```javascript
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="com.bignerdranch.android.criminalintent" >
    <uses-feature android:name="android.hardware.camera"
    android:required="false"/>
    ...
</manifest>
```
**调用摄像头和相册**
```java
public class MainActivity extends AppCompatActivity {
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
                if (Build.VERSION.SDK_INT < 24) {
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
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
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
                    if (Build.VERSION.SDK_INT >= 19) {
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
```
music

- setDataSource() 设置要播放的音频文件的位置
- prepare() 在开始播放之前调用这个方法完成准备工作
- start() 开始或继续播放音频
- pause() 暂停播放音频
- reset() 将MediaPlayer对象重置到刚刚创建的状态
- seekTo() 从指定的位置开始播放音频
- stop() 停止播放音频。调用这个方法后的MediaPlayer对象无法再播放音频
- release() 释放掉与MediaPlayer对象相关的资源
- isPlaying() 判断当前MediaPlayer是否正在播放音频
- getDuration() 获取载入的音频文件的时长
```java
public class MainActivity extends AppCompatActivity implements View.OnClickListener{

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
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
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
```

video

- setVideoPath() 设置要播放的视频文件的位置
- start() 开始或继续播放视频
- pause() 暂停播放视频
- resume() 将视频重头开始播放
- seekTo() 从指定的位置开始播放视频
- isPlaying() 判断当前是否正在播放视频
- getDuration() 获取载入的视频文件的时长
```java
<VideoView
android:id="@+id/video_view"
android:layout_width="match_parent"
android:layout_height="wrap_content" />
```

Android不允许在子线程中进行UI操作

异步消息处理

- Message	在线程之间传递的消息，它可以在内部携带少量的信 息，用于在不同线程之间交换数据
- Handler	发送消息一般是使用Handler的sendMessage() 方法，发出的消息经过一系列地辗转处理后，最终会传递到Handler的 handleMessage() 方法中
- MessageQueue	用于存放所有通过 Handler发送的消息。
- Looper	每个线程中的MessageQueue的管家



- [输入事件概览](https://developer.android.google.cn/guide/topics/ui/ui-events?hl=zh-cn)

全局获取Context
```java
public class MyApplication extends Application {
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
<application
    android:name=".MyApplication"
...> ...
```
Alarm
```java
public class LongRunningService extends Service {
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

// 启动定时服务
Intent intent = new Intent(context, LongRunningService.class);
context.startService(intent);
```


**Android 的CPU类型(ABIs)**  <br />  应用程序二进制接口（Application Binary Interface）定义了二进制文件如何运行在相应的系统平台上，从使用的指令集，内存对齐到可用的系统函数库。  <br />  在Android 系统上，每一个CPU架构对应一个ABI

- mips / mips64: 极少用于手机可以忽略（谷歌已经不支持了）
- x86 / x86_64: x86 架构的手机都会包含由 Intel 提供的称为 Houdini 的指令集动态转码工具，实现 对 arm .so 的兼容。占有率极低
- armeabi: ARM v5，旧老版本，缺少对浮点数计算的硬件支持，在需要大量计算时有性能瓶颈
- armeabi-v7a: ARM v7
- arm64-v8a: 64位支持，目前主流的版本

查询手机cpu命令行：
```javascript
adb shell getprop ro.product.cpu.abi    
adb shell getprop ro.product.cpu.abilist    CPU 支持的 abi 列表
```


# [ANDROID STUDIO](https://developer.android.google.cn/studio?hl=zh-cn)
[键盘快捷键](https://developer.android.google.cn/studio/intro/keyboard-shortcuts?hl=zh-cn)

| 在 Studio 内导航和搜索 |  |  |
| --- | --- | --- |
| 搜索全部内容（包括代码和菜单） | 按两次  <br />  Shift | 按两次  <br />  Shift |
| 查找 | Ctrl+F | Command+F |
| 查找下一项内容 | F3 | Command+G |
| 查找上一项内容 | Shift+F3 | Command+Shift+G |
| 替换 | Ctrl+R | Command+R |
| 查找操作 | Ctrl+Shift+A | Command+Shift+A |
| 按符号名称搜索 | Ctrl+Alt+Shift+N | Command+Option+O |
| 查找类 | Ctrl+N | Command+O |
| 查找文件（而不是类） | Ctrl+Shift+N | Command+Shift+O |
| 在路径中查找 | Ctrl+Shift+F | Command+Shift+F |
| 打开文件结构弹出式菜单 | Ctrl+F12 | Command+F12 |
| 在打开的编辑器标签页之间导航 | Alt+向右箭头  <br />  或  <br />  向左箭头 | Ctrl+向右箭头  <br />  或  <br />  Ctrl+向左箭头 |
| **跳到源代码** | **F4**  <br />  **或**  <br />  **Ctrl+Enter** | **F4**  <br />  **或**  <br />  **Command+向下箭头** |
| 转到上一个编辑位置 | Ctrl+Shift+退格键 | Command+Shift+Delete |
| 关闭活动编辑器标签页 | Ctrl+F4 | Command+W |


| 编写代码 |  |  |
| --- | --- | --- |
| 生成代码（getter、setter、构造函数、hashCode/equals、toString、新文件、新类） | Alt+Insert | Command+N |
| 替换方法 | Ctrl+O | Ctrl+O |
| 实现方法 | Ctrl+I | Ctrl+I |
| 控制语句（if...else / try...catch / 等） | Ctrl+Alt+T | Command+Option+T |
| 删除插入符处的行 | Ctrl+Y | Command+Delete |
| 收起/展开当前代码块 | Ctrl+减号键  <br />  或  <br />  Ctrl+加号键 | Command+减号键  <br />  或  <br />  Command+加号键 |
| 收起/展开所有代码块 | Ctrl+Shift+减号键  <br />  或  <br />  Ctrl+Shift+加号键 | Command+Shift+减号键  <br />  或  <br />  Command+Shift+加号键 |
| 复制当前行或选择 | Ctrl+D | Command+D |
| 基本代码补全 | Ctrl+空格键 | Ctrl+空格键 |
| 智能代码补全（按预期类型过滤方法和变量列表） | Ctrl+Shift+空格键 | Ctrl+Shift+空格键 |
| 完成语句 | Ctrl+Shift+Enter | Command+Shift+Enter |
| 快速查找文档 | Ctrl+Q | Ctrl+J |
| 显示选定方法的参数 | Ctrl+P | Command+P |
| 转到声明（直接） | Ctrl+B  <br />  或  <br />  Ctrl  <br />  +点击 | Command+B  <br />  或  <br />  Command  <br />  +点击 |
| 转到实现 | Ctrl+Alt+B | Command+Option+B |
| 转到超方法/超类 | Ctrl+U | Command+U |
| 打开快速定义查找 | Ctrl+Shift+I | Command+Y |
| 切换项目工具窗口的可见性 | Alt+1 | Command+1 |
| 切换书签 | F11 | F3 |
| 通过助记符切换书签 | Ctrl+F11 | Option+F3 |
| 通过行注释添加注释/取消注释 | Ctrl+/ | Command+/ |
| 通过块注释添加注释/取消注释 | Ctrl+Shift+/ | Command+Shift+/ |
| 选择连续增加的代码块 | Ctrl+W | Option+向上箭头 |
| 将当前选择退回到上一个状态 | Ctrl+Shift+W | Option+向下箭头 |
| 移动到代码块起始位置 | Ctrl+[ | Option+Command+[ |
| 移动到代码块结束位置 | Ctrl+] | Option+Command+] |
| 从当前位置选择到代码块起始位置 | Ctrl+Shift+[ | Option+Command+Shift+[ |
| 从当前位置选择到代码块结束位置 | Ctrl+Shift+] | Option+Command+Shift+] |
| 从当前位置删除到单词结尾位置 | Ctrl+Delete | Option+Delete |
| 从当前位置删除到单词开头位置 | Ctrl+退格键 | Option+Delete |
| 优化导入 | Ctrl+Alt+O | Ctrl+Option+O |
| 项目快速修复（显示意图操作和快速修复） | Alt+Enter | Option+Enter |
| **重新格式化代码** | **Ctrl+Alt+L** | **Command+Option+L** |
| 自动缩进行 | Ctrl+Alt+I | Ctrl+Option+I |
| 缩进/取消缩进行 | Tab  <br />  或  <br />  Shift+Tab | Tab  <br />  或  <br />  Shift+Tab |
| 智能行合并 | Ctrl+Shift+J | Ctrl+Shift+J |
| 智能行拆分 | Ctrl+Enter | Command+Enter |
| **开始新行** | **Shift+Enter** | **Shift+Enter** |
| 下一个/上一个突出显示的错误 | F2  <br />  或  <br />  Shift+F2 | F2  <br />  或  <br />  Shift+F2 |
| 编译并运行 |  |  |
| 编译 | Ctrl+F9 | Command+F9 |
| 编译并运行 | Shift+F10 | Ctrl+R |
| 应用更改并重启 Activity | Ctrl+F10 | Ctrl+Command+R |
| 应用代码更改 | Ctrl+Alt+F10 | Ctrl+Shift+Command+R |
| 调试 |  |  |
| 调试 | Shift+F9 | Ctrl+D |
| 单步执行 | F8 | F8 |
| 单步进入 | F7 | F7 |
| 智能单步进入 | Shift+F7 | Shift+F7 |
| 单步退出 | Shift+F8 | Shift+F8 |
| 运行到光标位置 | Alt+F9 | Option+F9 |
| 评估表达式 | Alt+F8 | Option+F8 |
| 继续运行程序 | F9 | Command+Option+R |
| 切换断点 | Ctrl+F8 | Command+F8 |
| 查看断点 | Ctrl+Shift+F8 | Command+Shift+F8 |



```javascript
implementation fileTree(dir: 'libs', include: ['*.jar'])	本地依赖声明，表示将libs目录下所有.jar后缀的文件都添加到项目的构建路径中
implementation	远程依赖声明
testImplementation和androidTestImplementation	声明测试用例库
```


[在 WebView 中开发 Web 应用](https://developer.android.google.cn/guide/webapps/webview?hl=zh-cn)  <br />  Webview调用Java方法  <br />  1、允许WebView加载js  <br />  webView.getSettings().setJavaScriptEnabled(true);  <br />  2、编写js接口类  <br />  3、给WebView添加js接口  <br />  webView.addJavascriptInterface(obj, name);

Android调用js方法  <br />  使用loadUrl方法调用javascript

- webView.loadUrljavascript:jsString);
- jsString是要调用的js代码的字符串

Chrome调试  <br />  打开允许调试的开关  <br />  webView.setWebContentsDebuggingEnabled(true);


activity_main.xml
```javascript
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="450dp" />

    <TextView
        android:id="@+id/appText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textColor="#cc0000"
        android:textSize="20sp"
        android:layout_marginTop="20dp"
        tools:text="apptext"/>

    <androidx.appcompat.widget.LinearLayoutCompat
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <EditText
            android:id="@+id/edittext"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:minWidth="80dp"/>
        <Button
            android:id="@+id/button"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="15dp"
            android:text="Send"/>
    </androidx.appcompat.widget.LinearLayoutCompat>

</LinearLayout>
```
```javascript
public interface JSBridge {
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
```

/main/assets/index.html
```javascript
<!DOCTYPE html>
<html>

<head>
  <title>Webview</title>
  <style>
    body {
      background-color: aqua;
    }
  </style>
</head>

<body>

<h1>Webview</h1>

<p>input form</p>

<form id="form">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" id="btn" value="提交">
</form>

<script>
    let fname = document.getElementById('fname');
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      let str = fname.value;
      if (window.sendToApp) {
        sendToApp.setValue(str);
      }
    });
    let receiveFromApp = function (str) {
      fname.value = str;
    }
  </script>

</body>

</html>
```

