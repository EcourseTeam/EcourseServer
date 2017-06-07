package e.httptest;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    Button btn, btn2;
    String insertjson, selectjson;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Gson gson = new Gson();

        SQLReq req = new SQLReq();
        req.setSqlReq("insert");
        req.setTableName("tbl_UserInfo");
        insertjson = gson.toJson(req);
        req.setSqlReq("select");
        selectjson = gson.toJson(req);

        btn = (Button) findViewById(R.id.button);
        btn2 = (Button) findViewById(R.id.button2);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                HttpUtil.sendPostHttpRequest("http://192.168.0.3:3000/", insertjson, new HttpCallbackListener() {
                    @Override
                    public void onFinish(String response) {
                        Log.i("aaa", response);
                    }

                    @Override
                    public void onError(Exception e) {
                        Log.i("eee", e.toString());
                    }
                });
            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                HttpUtil.sendPostHttpRequest("http://192.168.0.3:3000/", selectjson, new HttpCallbackListener() {
                    @Override
                    public void onFinish(String response) {
                        Log.i("aaa", response);
                    }

                    @Override
                    public void onError(Exception e) {
                        Log.i("eee", e.toString());
                    }
                });
            }
        });

    }
}

class Man {
    String name;
    int age;

    public void setName(String name) {
        this.name = name;
    }
    public void setAge(int age) {
        this.age = age;
    }
}

class SQLReq {
    String sqlRequest;
    String tableName;
    List<UserInfo> entries = new ArrayList<UserInfo>();
    Filter filter;

    public SQLReq() {
        UserInfo userInfo = new UserInfo();
        userInfo.setSC(2);
        userInfo.setPW("pwww");
        entries.add(userInfo);
        entries.add(userInfo);
        entries.add(userInfo);
        filter = new Filter();
        filter.setPW("pwww");
    }

    public void setSqlReq(String req) {
        sqlRequest = req;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }
}

class UserInfo {
    int idx_ShareCourse;
    String idx_Password;

    public void setSC(int sc) {
        idx_ShareCourse = sc;
    }

    public void setPW(String pw) {
        idx_Password = pw;
    }
}

class Filter {
    String idx_Password;
    public void setPW(String pw) {
        idx_Password = pw;
    }
}