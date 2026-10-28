---
id: ex-ch05-rigidite-isometries
type: exercise
chapters: [5]
title: Rigidité — une application dont la différentielle est partout orthogonale est affine
source: "Classique (rigidité des isométries infinitésimales ; argument des « symboles de Christoffel »)"
difficulty: 3
time: 40
tools: [ch05-lemme-schwarz, ch05-differentielle-seconde-def, ch05-formule-leibniz, ch05-composition-differentielles, ch05-differentielles-partielles, ch05-differentielle-nulle-constante, ch05-accroissements-finis]
---
## Énoncé

Soit $n\ge1$. On munit $\R^n$ du produit scalaire usuel $\langle\cdot,\cdot\rangle$, de la norme associée $\norm\cdot$, et l'on note $(e_1,\dots,e_n)$ la base canonique. Soit $U$ un ouvert **connexe** de $\R^n$ et $f:U\to\R^n$ une application de classe $C^2$ telle que, pour tout $x\in U$, $df_x$ soit une isométrie linéaire :
$$
\big\langle df_x(h),df_x(k)\big\rangle=\langle h,k\rangle\qquad(x\in U,\ h,k\in\R^n),
$$
c'est-à-dire que la matrice jacobienne de $f$ en $x$ appartient au groupe orthogonal $O(n)$.

1. Vérifier que $x\mapsto Ax+b$, avec $A\in O(n)$ et $b\in\R^n$, satisfait l'hypothèse. Montrer que si $U$ est de plus convexe, $f$ est $1$-lipschitzienne.
2. Pour $i\in\{1,\dots,n\}$, on pose $v_i(x)=\dfrac{\partial f}{\partial x_i}(x)=df_x(e_i)$. Montrer que $(v_1(x),\dots,v_n(x))$ est une base orthonormée de $\R^n$, que $v_i$ est de classe $C^1$ et que
$$
\frac{\partial v_j}{\partial x_i}(x)=d^2f_x(e_i,e_j)=\frac{\partial v_i}{\partial x_j}(x).
$$
3. On pose $a_{ijk}(x)=\big\langle d^2f_x(e_i,e_j),\,v_k(x)\big\rangle$. Montrer que $a_{ijk}$ est symétrique en $(i,j)$ et antisymétrique en $(j,k)$ : $a_{ijk}=a_{jik}$ et $a_{ijk}=-a_{ikj}$. En déduire que $a_{ijk}=0$ pour tous $i,j,k$.
4. Conclure qu'il existe $A\in O(n)$ et $b\in\R^n$ tels que $f(x)=Ax+b$ pour tout $x\in U$.
5. Que se passe-t-il si $U$ n'est plus supposé connexe ? Soit maintenant $g:\R^2\to\R^3$, $g(s,t)=(\cos s,\sin s,t)$. Montrer que $\norm{dg_{(s,t)}(h)}=\norm h$ pour tout $h\in\R^2$, mais que $g$ n'est pas affine. Quelle étape de la preuve tombe en défaut ?

## Indices

### Indice 1
L'hypothèse porte sur les produits scalaires des dérivées partielles $v_i$ ; on peut la **dériver** une fois de plus. Deux outils : la formule de Leibniz pour dériver un produit scalaire, et la symétrie de la différentielle seconde.

### Indice 2
$v_i=\mathrm{ev}_{e_i}\circ df$ où $\mathrm{ev}_{e_i}:L\mapsto L(e_i)$ est linéaire continue ; donc $dv_{i,x}(h)=d(df)_x(h)(e_i)=d^2f_x(h,e_i)$. Le lemme de Schwarz s'applique car $f$ est $C^2$. Dériver $\langle v_j,v_k\rangle=\delta_{jk}$ par rapport à $x_i$ donne l'antisymétrie.

### Indice 3
Un tableau $a_{ijk}$ symétrique en $(i,j)$ et antisymétrique en $(j,k)$ : alterner les deux règles six fois, $a_{ijk}=-a_{ikj}=-a_{kij}=a_{kji}=a_{jki}=-a_{jik}=-a_{ijk}$. Puis les coordonnées de $d^2f_x(e_i,e_j)$ dans la base orthonormée $(v_k(x))_k$ sont les $a_{ijk}$.

## Corrigé

**1.** Pour $f(x)=Ax+b$, $df_x=A$ (application affine : partie linéaire continue, [[ch05-differentielle-lineaire]]), et $\langle Ah,Ak\rangle=\langle{}^tAAh,k\rangle=\langle h,k\rangle$ car ${}^tAA=I_n$. En général, $df_x$ conserve la norme, donc $\norm{df_x}=\sup_{\norm h=1}\norm{df_x(h)}=1$. Si $U$ est convexe, le théorème des accroissements finis ([[ch05-accroissements-finis]] ; $f$ différentiable sur l'ouvert convexe $U$, $\sup_U\norm{df_x}\le1$) donne $\norm{f(y)-f(x)}\le\norm{y-x}$.

**2.** *Base orthonormée.* $\langle v_i(x),v_j(x)\rangle=\langle df_x(e_i),df_x(e_j)\rangle=\langle e_i,e_j\rangle=\delta_{ij}$ : $n$ vecteurs orthonormés de $\R^n$ forment une base orthonormée.

*Régularité et dérivées.* Comme $f$ est $C^2$, $df:U\to\mathcal L(\R^n;\R^n)$ est de classe $C^1$. L'application $\mathrm{ev}_{e_i}:\mathcal L(\R^n;\R^n)\to\R^n$, $L\mapsto L(e_i)$, est linéaire et continue ($\norm{L(e_i)}\le\norm L$), donc égale à sa différentielle. Par la règle de la chaîne ([[ch05-composition-differentielles]]), $v_i=\mathrm{ev}_{e_i}\circ df$ est $C^1$ et
$$
dv_{i,x}(h)=\mathrm{ev}_{e_i}\big(d(df)_x(h)\big)=d(df)_x(h)(e_i)=d^2f_x(h,e_i)
$$
(identification de la différentielle seconde à une application bilinéaire, [[ch05-differentielle-seconde-def]]). Avec la notation des dérivées partielles ([[ch05-differentielles-partielles]]), $\frac{\partial v_i}{\partial x_j}(x)=dv_{i,x}(e_j)=d^2f_x(e_j,e_i)$, et de même $\frac{\partial v_j}{\partial x_i}(x)=d^2f_x(e_i,e_j)$. Le lemme de Schwarz ([[ch05-lemme-schwarz]] ; hypothèses : $f$ de classe $C^1$ et $df$ différentiable en $x$, vraies puisque $f$ est $C^2$) donne $d^2f_x(e_i,e_j)=d^2f_x(e_j,e_i)$, d'où l'égalité demandée.

**3.** *Symétrie en $(i,j)$.* C'est le lemme de Schwarz : $d^2f_x(e_i,e_j)=d^2f_x(e_j,e_i)$, donc $a_{ijk}=a_{jik}$.

*Antisymétrie en $(j,k)$.* La fonction $x\mapsto\langle v_j(x),v_k(x)\rangle$ est constante, égale à $\delta_{jk}$, sur $U$. Par la formule de Leibniz ([[ch05-formule-leibniz]] avec $b=\langle\cdot,\cdot\rangle$, bilinéaire continue), sa différentielle en $x$, évaluée en $e_i$, vaut
$$
0=\Big\langle\frac{\partial v_j}{\partial x_i}(x),v_k(x)\Big\rangle+\Big\langle v_j(x),\frac{\partial v_k}{\partial x_i}(x)\Big\rangle=\big\langle d^2f_x(e_i,e_j),v_k\big\rangle+\big\langle d^2f_x(e_i,e_k),v_j\big\rangle=a_{ijk}+a_{ikj}.
$$
*Nullité.* En utilisant alternativement l'antisymétrie (A) en les deux derniers indices et la symétrie (S) en les deux premiers :
$$
a_{ijk}\overset{A}=-a_{ikj}\overset{S}=-a_{kij}\overset{A}=a_{kji}\overset{S}=a_{jki}\overset{A}=-a_{jik}\overset{S}=-a_{ijk},
$$
donc $2a_{ijk}=0$ : $a_{ijk}=0$ pour tous $i,j,k$ et tout $x\in U$.

**4.** *$d^2f=0$.* Pour $x\in U$ et $i,j$ fixés, le vecteur $w=d^2f_x(e_i,e_j)$ a pour coordonnées $\langle w,v_k(x)\rangle=a_{ijk}(x)=0$ dans la base orthonormée $(v_k(x))_k$ (question 2) : $w=0$. Par bilinéarité, $d^2f_x=0$, c'est-à-dire $d(df)_x=0$, pour tout $x\in U$.

*$df$ constante.* L'application $df:U\to\mathcal L(\R^n;\R^n)$ est différentiable de différentielle nulle sur l'ouvert **connexe** $U$ : elle est constante ([[ch05-differentielle-nulle-constante]]), égale à un $A\in\mathcal L(\R^n;\R^n)$, qui est une isométrie (hypothèse), donc $A\in O(n)$.

*$f$ affine.* La fonction $x\mapsto f(x)-Ax$ a pour différentielle $df_x-A=0$ en tout point de $U$ connexe : elle est constante, égale à $b\in\R^n$. Donc $f(x)=Ax+b$.

**5.** *Sans connexité.* Le Corollaire V.4.5 ne donne plus que « $df$ localement constante » : $f$ est affine sur **chaque composante connexe** de $U$, avec des $(A,b)$ éventuellement différents. Exemple : $U=B(0,1)\cup B(3e_1,1)$, $f(x)=x$ sur la première boule et $f(x)=-x$ sur la seconde.

*L'exemple $g$.* $\frac{\partial g}{\partial s}=(-\sin s,\cos s,0)$ et $\frac{\partial g}{\partial t}=(0,0,1)$ sont orthonormés, donc pour $h=(h_1,h_2)$, $\norm{dg_{(s,t)}(h)}^2=\norm{h_1\partial_sg+h_2\partial_tg}^2=h_1^2+h_2^2$. Mais $d^2g_{(s,t)}(e_1,e_1)=\frac{\partial^2g}{\partial s^2}=(-\cos s,-\sin s,0)\ne0$, donc $dg$ n'est pas constante et $g$ n'est pas affine (d'ailleurs $g(2\pi,0)=g(0,0)$, alors qu'une application affine isométrique est injective).

*Ce qui tombe en défaut.* Les questions 2 et 3 restent vraies avec $i,j,k\in\{1,2\}$ : $a_{ijk}=0$ signifie que $d^2g(e_i,e_j)$ est **orthogonal** à $v_1,v_2$ (on le vérifie : $(-\cos s,-\sin s,0)$ est orthogonal à $(-\sin s,\cos s,0)$ et à $(0,0,1)$). Mais à la question 4, $(v_1,v_2)$ n'est plus une base de $\R^3$ : on ne contrôle que la composante « tangentielle » de $d^2g$, pas sa composante normale. Enrouler une feuille de papier en cylindre conserve les longueurs sans être affine ; c'est impossible sans changer de dimension.

## Pièges et variantes

* Écrire $\frac{\partial v_i}{\partial x_j}=d^2f(e_i,e_j)$ sans passer par Schwarz : avec la convention $d^2f_x(h,k)=d(df)_x(h)(k)$, on obtient d'abord $d^2f_x(e_j,e_i)$ ; c'est la symétrie qui rend l'ordre indifférent (elle demande $f$ de classe $C^2$, ou au moins $df$ différentiable).
* Oublier la connexité de $U$ à la question 4 (voir question 5).
* Conclure de « $\norm{df_x}=1$ partout » que $f$ est $1$-lipschitzienne sans convexité : c'est faux en général. Sur les deux boules de la question 5, $\norm{f(0{,}9e_1)-f(2{,}1e_1)}=\norm{0{,}9e_1+2{,}1e_1}=3$ alors que $\norm{0{,}9e_1-2{,}1e_1}=1{,}2$. Sur un ouvert connexe, c'est la conclusion de la question 4 qui donne le caractère $1$-lipschitzien, a posteriori.
* Variante (plus difficile, admise ici) : le résultat reste vrai si $f$ est seulement $C^1$ (on montre que $f$ conserve localement les distances, puis qu'une telle application est affine), mais la preuve ci-dessus utilise vraiment $d^2f$.
* Variante : en dimension $2$, avec $\R^2\simeq\C$, $df_z\in SO(2)$ pour tout $z$ signifie que $f$ est holomorphe avec $|f'(z)|=1$ ; alors $f'$ est holomorphe de module constant sur un ouvert connexe, donc constante, et l'on retrouve $f(z)=az+b$, $|a|=1$.
