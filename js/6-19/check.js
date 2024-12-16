document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', function () {
    const result = [];
    const foods = document.getElementsByName('food');
    const foodsArray = [...foods];

    const food = foodsArray
      .filter((food) => food.checked)
      .map((food) => food.value);
    window.alert(food.toString());
  });
});
