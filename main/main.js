module.exports = function main(str) {
    var a=[];
    var head=['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
    var mid=['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
    var tail=['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
    var s='';

    a.push(head[str[0]-'0']);
    a.push(mid[str[0]-'0']);
    a.push(tail[str[0]-'0']);
    for(var i=1;i<str.length;i++)
    {
        a[0]+=' ';
        a[1]+=' ';
        a[2]+=' ';
        a[0]+=head[str[i]-'0'];
        a[1]+=mid[str[i]-'0'];
        a[2]+=tail[str[i]-'0'];
    }
    for(var i=0;i<3;i++)
    {
        s+=a[i];
        s+='\n';
    }
    return s;
};