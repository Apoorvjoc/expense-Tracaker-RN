#include <bits/stdc++.h>
using namespace std;
/*
vector<int> findFirstNegative(vector<int> arr , int k){
    vector<int>ans = arr;
    int j = 0 , i = 0;
    queue<int>q;
    while(j<arr.size()){
        if(arr[j]<0){
            cout<<arr[j]<<" ";
            q.push(arr[j]);
        }if(j-i+1 < k)j++;
        // else if(j-i+1 == k){
        //     if(q.empty()){
        //         ans.push_back(0);
        //     }else{
        //         ans.push_back(q.front());
        //         if(arr[i] == q.front())
        //         {
        //             q.pop();
        //         }
        //         i++;j++;
        //     }
        // }
    // }
        while(!q.empty()){
            cout<<q.front()<<" ";
            q.pop();
        }
    
    return ans;
}
*/
int maxSubarraySum(vector<int>nums , int k){
    int i = 0 , j = 0 , sum = 0 ,maxSum = INT_MIN;
    while(j<=nums.size()){
        sum += nums[j];
        if(j-i+1 < k)j++;
        else if(j-i+1 == k){
            maxSum = max(maxSum , sum);
            sum = sum - nums[i];
            i++;j++;
        }
    }
    return maxSum;
}

vector<int> findFirstNegative(vector<int>nums , int k){
    int i = 0 , j = 0 ; vector<int>ans ; queue<int>q; 
    while(j<=nums.size()){
        
        if(nums[j]<0)q.push(nums[j]);
        // cout<<"Queue at j: "<<j<<" "<<q.front()<<endl;
        if(j-i+1 < k)j++;
        
        else if(j-i+1 == k){
            if(q.empty())ans.push_back(0);
            else{
                ans.push_back(q.front());
                if(nums[i] == q.front()){
                    q.pop();
                }
            }
            i++;j++;
        }
    }
    return ans;
}

int main() {
    int n , k;cin>>n>>k;
    vector<int>arr;
    for(int i = 0 ; i<n ; i++){
        int elem;cin>>elem;
        arr.push_back(elem);
    }
    vector<int> ans = findFirstNegative(arr, k);
    // cout<<maxSubarraySum(arr , k);
    for(auto i : ans){
        cout<<i<<" ";
    }
}
