import React from 'react'
import MaterialCard from './MaterialCard'


const MiddleSideBar = () => {
    return (
        <div className="col-lg p-5" style={{ width: 'max-content' }} >
            <MaterialCard
             MID = {"SICSEM0"}
             title = {"O'Reilly - Head First Object-Oriented Analysis & Design"}
             description = {`كتاب لطيف جدا هيساعدك انك تفهم ال oop كويس 
             هو مفترض انك يدوب تعرف oop language 
             وبيبدا معاك من الاول ميزه الكتاب انه معتمد اسلوب جديد ف الشرح باعتماده على الصور 
             ف بيكون لذيذ ف المذاكره !`}
             link = {"https://bit.ly/3wGFTdy"} />

<MaterialCard
             MID = {"SICSEM1"}
             title = {"بودكاست لطيف جدا عن الحجات المهمه لاي جونيور software engineer"}
             description = {""}
             link = {"https://youtu.be/7jIti9PFW5A"} />

<MaterialCard
             MID = {"SICSEM2"}
             title = {"Data Structures HackerRank Youtube playlist"}
             description = {`لو عايز حاجه صغيره وبتشرح كويس ال 
             data structures 
             الاساسيه 
             ف هنا هتلاقي الحوار دا `}
             link = {"https://www.youtube.com/playlist?list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX"} />
<MaterialCard
             MID = {"SICSEM3"}
             title = {"Big O notation HackerRank Youtube video"}
             description = {`دا فيديو صغير يعتبر بدايه انك تفهم يعني ايه 
             Big O notation 
             وليه هي مهمه ف اي كود انت بتكتبه`}
             link = {"https://www.youtube.com/watch?v=v4cd1O4zkGw"} />
        </div>
    )
}

export default MiddleSideBar
