var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  _id             :Number,
  start_sem       :Number,
  cur_sem         :Number,
  total_back      :Number,
  cpi             :Number,
  cgpa            :Number,
  detain_history  :[Number],
  detain          :Boolean,
  TFee_pdf        :Boolean,
  EFee_pdf        :Boolean,
  backs:{
    s_1:Number,
    s_2:Number,
    s_3:Number,
    s_4:Number,
    s_5:Number,
    s_6:Number,
    s_7:Number,
    s_8:Number,
  },
  basic:{
    course          :String,
    name            :String,
    age             :Number,
    gender          :String,
    category        :String,
    mode_of_adm     :String,
    mob_no          :Number,
    email           :String,
    add_t           :String,
    add_p           :String,
    tfw             :String,
    branch          :String,
    dob             :String,
    division        :String,
    city            :String,
    district        :String,
    state           :String,
    pincode         :String,
  },

  s_1:{
    Term_fee     :Number,
    Exam_fee_Reg :Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  s_2:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_2:{
    Exam_fee_Rem :Number
  },
  s_3:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_3:{
    Exam_fee_Rem :Number
  },
  s_4:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_4:{
    Exam_fee_Rem :Number
  },
  s_5:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_5:{
    Exam_fee_Rem :Number
  },
  s_6:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_6:{
    Exam_fee_Rem :Number
  },
  s_7:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_7:{
    Exam_fee_Rem :Number
  },
  s_8:{
    Term_fee    :Number,
    Exam_fee_Reg:Number,
    Exam_fee_Rem :Number,
    Tsubject     :Number,
    result:{
      spi :Number,  res :String,
      sub1:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub2:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub3:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub4:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub5:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub6:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub7:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub8:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub9:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },
      sub10:{
        code   :Number,  name   :String,  sub_grade  :String,  absent :String,  sub_back :String,
        these  :String,  thpa   :String,  thtot      :String,
        prese  :String,  prpa   :String,  prtot      :String,
      },

    }
  },
  D_8:{
    Exam_fee_Rem :Number
  },

});

 var Students = mongoose.model("Students",studentSchema);


//==========exporting multiple models ref:- https://stackoverflow.com/questions/13857203/cant-get-data-from-database-after-multiple-schema-declared-mongoose-express
module.exports = Students;
