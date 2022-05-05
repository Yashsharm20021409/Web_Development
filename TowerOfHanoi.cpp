#include <iostream>
using namespace std;

class TOH
{
public:
    TOH(int n, char from_src, char aux, char to_des)
    {
        if (n == 0)
        {
            return;
        }
        TOH(n - 1, from_src, to_des, aux);
        cout << "Move disk " << n << " from rod " << from_src << " to rod " << to_des << endl;
        TOH(n - 1, aux, from_src, to_des);
    }
};

int main()
{
    int n = 3;
    TOH ob(n, 'A', 'B', 'C');
}