var scope = 'Global Variable';

function checkScope() {
  var scope = 'Local Variable';

  var f_lit = function () {
    return scope;
  };
  console.log(f_lit()); // 結果：Local Variable

  var f_con = new Function('return scope;');
  console.log(f_con()); // 結果：Global Variable
}

checkScope();
