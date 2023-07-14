#include <stdio.h>

int fibonacci_counter(int nth) {
  {
    if (nth <= 2) {
      return 1;
    } 
    else {
      return (fibonacci_counter(nth - 1) + fibonacci_counter(nth - 2));
    }
  }
}


int main(void) {
  int nth;
  printf("which fibonacci u looking for?\n");
  scanf("%d", &nth);
  int result = fibonacci_counter(nth);
  printf("The Fibonacci number at position %d is: %d\n", nth, result);
  
  return 0;
}