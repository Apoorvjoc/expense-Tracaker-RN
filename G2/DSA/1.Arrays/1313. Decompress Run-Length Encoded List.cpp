#include <bits/stdc++.h>
using namespace std;

vector<int> decompressRLElist(vector<int> &nums)
{
    vector<int> res;
    for (int i = 0; i < nums.size(); i++)
    {
        if (i % 2 == 0)
        {
            for (int j = 0; j < nums[i]; j++)
            {
                res.push_back(nums[i + 1]);
            }
        }
    }
    return res;
}

int main()
{
    int n;
    cin >> n;
    vector<int> nums;
    for (int i = 0; i < n; i++)
    {
        int elem;
        cin >> elem;
        nums.push_back(elem);
    }
    vector<int> res = decompressRLElist(nums);
    for (auto i : res)
    {
        cout << i << ",";
    }
}
