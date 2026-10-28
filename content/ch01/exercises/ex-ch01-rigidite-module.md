---
id: ex-ch01-rigidite-module
type: exercise
chapters: [1]
title: Ce que le module d'une fonction holomorphe impose
source: Inventé
difficulty: 2
time: 25
tools: [ch01-principe-maximum, ch01-prolongement-analytique, ch01-stabilite-operations, ch01-estimees-cauchy, ch01-operateurs-dz-dzbar, ch01-formulaire-dz-dzbar, ch01-c-derivable-ssi-df-c-lineaire, ch01-holomorphe-analytique, ch01-exp-trigo-hyperboliques]
---
## Énoncé

Dans les questions 1 et 2, $\Omega$ est un ouvert **connexe** non vide de $\C$ et $f,g\in\Hol(\Omega)$.

1. On suppose que $|f(z)|=|g(z)|$ pour tout $z\in\Omega$. Montrer qu'il existe $\lambda\in\C$ avec $|\lambda|=1$ tel que $f=\lambda g$ sur $\Omega$.
2. On suppose que la fonction $z\mapsto|f(z)|^2+|g(z)|^2$ est constante sur $\Omega$. Montrer que $f$ et $g$ sont constantes.
3. On écrit $z=x+iy$ avec $x,y$ réels. On appelle fonction entière une fonction holomorphe sur $\C$.
   * (a) Déterminer toutes les fonctions entières $f$ telles que $|f(x+iy)|^2=\sin^2x+\sinh^2y$ pour tous $x,y\in\R$.
   * (b) Existe-t-il une fonction entière $f$ telle que $|f(z)|^2=1+|z|^2$ pour tout $z\in\C$ ?
4. Montrer par un exemple que la conclusion de la question 1 peut être fausse si l'ouvert $\Omega$ n'est pas connexe.

## Indices

### Indice 1
Là où $g$ ne s'annule pas, le quotient $f/g$ est holomorphe et de module constant. Quel théorème du cours interdit à une fonction holomorphe non constante d'avoir un module maximal en un point intérieur ? Il restera à propager l'égalité obtenue sur un petit disque.

### Indice 2
Question 1 : principe du maximum pour $h=f/g$ sur un disque $D(z_0,r)$ où $g$ ne s'annule pas ($|h|$ y est constant, donc maximal en $z_0$), puis prolongement analytique sur l'ouvert connexe $\Omega$. Question 2 : calculer $\dfrac{\partial}{\partial z}\Bigl(\dfrac{\partial}{\partial\bar z}(f\bar f)\Bigr)$ avec les règles de calcul des opérateurs $\partial/\partial z$ et $\partial/\partial\bar z$.

### Indice 3
On trouve $\dfrac{\partial^2(f\bar f)}{\partial z\,\partial\bar z}=|f'|^2$. Pour 3(a), calculer $|\sin(x+iy)|^2$ ; pour 3(b), appliquer ce même calcul à $|f|^2=1+z\bar z$.

## Corrigé

**1.** Si $g\equiv0$, alors $|f|=|g|=0$, donc $f\equiv0$ et $\lambda=1$ convient. Sinon, soit $z_0\in\Omega$ tel que $g(z_0)\ne0$. Par continuité de $g$, il existe $r>0$ tel que $D(z_0,r)\subset\Omega$ et $g$ ne s'annule pas sur $D(z_0,r)$. Sur ce disque, $h=f/g$ est holomorphe ([[ch01-stabilite-operations]]) et $|h|=|f|/|g|=1$. En particulier $|h|$ admet un maximum (local) en $z_0$, et $D(z_0,r)$ est connexe (convexe) : par le principe du maximum ([[ch01-principe-maximum]]), $h$ est constante sur $D(z_0,r)$, égale à $\lambda:=h(z_0)$, avec $|\lambda|=1$.

Ainsi $f$ et $\lambda g$ sont deux fonctions holomorphes sur l'ouvert **connexe** $\Omega$ qui coïncident sur le disque $D(z_0,r)$, partie qui a des points d'accumulation dans $\Omega$ (par exemple $z_0$). Par le principe du prolongement analytique ([[ch01-prolongement-analytique]]), $f=\lambda g$ sur $\Omega$.

**2.** Rappelons que pour $u$ holomorphe, $du_z$ est la multiplication par $u'(z)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]), donc, avec la décomposition (I.2.4) de [[ch01-operateurs-dz-dzbar]], $\frac{\partial u}{\partial z}=u'$ et $\frac{\partial u}{\partial\bar z}=0$. Par (I.2.9) ([[ch01-formulaire-dz-dzbar]]), $\frac{\partial\bar u}{\partial\bar z}=\overline{\frac{\partial u}{\partial z}}=\overline{u'}$ et $\frac{\partial\bar u}{\partial z}=\overline{\frac{\partial u}{\partial\bar z}}=0$.

Les fonctions holomorphes sont $C^\infty$ ([[ch01-holomorphe-analytique]]), et $f'$ est holomorphe ; la règle du produit (I.2.11) puis (I.2.10) donne
$$
\frac{\partial(f\bar f)}{\partial\bar z}=\underbrace{\frac{\partial f}{\partial\bar z}}_{=0}\bar f+f\,\overline{f'}=f\,\overline{f'},\qquad
\frac{\partial}{\partial z}\bigl(f\,\overline{f'}\bigr)=f'\,\overline{f'}+f\,\underbrace{\frac{\partial\overline{f'}}{\partial z}}_{=0}=|f'|^2 .
$$
De même pour $g$. Si $|f|^2+|g|^2=f\bar f+g\bar g$ est constante sur $\Omega$, toutes ses dérivées partielles sont nulles, d'où
$$
0=\frac{\partial^2}{\partial z\,\partial\bar z}\bigl(|f|^2+|g|^2\bigr)=|f'|^2+|g'|^2\quad\text{sur }\Omega,
$$
et donc $f'=g'=0$ sur $\Omega$ (somme de deux réels positifs). Soit $z_0\in\Omega$ et $r>0$ avec $D(z_0,r)\subset\Omega$ : sur ce disque $f(z)=\sum_n\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n=f(z_0)$ ([[ch01-estimees-cauchy]], toutes les dérivées d'ordre $\ge1$ sont nulles). Donc $f$ coïncide avec la constante $f(z_0)$ sur un disque, donc sur $\Omega$ connexe par prolongement analytique. Idem pour $g$.

**3.(a)** Pour $x,y$ réels, $\cos(iy)=\cosh y$ et $\sin(iy)=i\sinh y$ ([[ch01-exp-trigo-hyperboliques]]), d'où $\sin(x+iy)=\sin x\cosh y+i\cos x\sinh y$ et
$$
|\sin(x+iy)|^2=\sin^2x\cosh^2y+\cos^2x\sinh^2y=\sin^2x\,(1+\sinh^2y)+\cos^2x\sinh^2y=\sin^2x+\sinh^2y .
$$
L'hypothèse s'écrit donc $|f|=|\sin|$ sur $\C$, qui est connexe. Par la question 1, $f=\lambda\sin$ avec $|\lambda|=1$. Réciproquement, ces fonctions conviennent. Les solutions sont les $\lambda\sin$, $|\lambda|=1$.

**3.(b)** Supposons qu'une telle $f$ existe. Le calcul de la question 2 donne $\frac{\partial^2(f\bar f)}{\partial z\partial\bar z}=|f'|^2$, tandis que pour $1+z\bar z$ on trouve $\frac{\partial}{\partial z}\frac{\partial}{\partial\bar z}(1+z\bar z)=\frac{\partial z}{\partial z}=1$. Donc $|f'(z)|=1$ pour tout $z\in\C$. Par la question 1 appliquée à $f'$ et à la constante $1$ sur $\C$, $f'=c$ avec $|c|=1$, puis (même argument de série qu'en 2 appliqué à $f-cz$, de dérivée nulle) $f(z)=cz+d$ avec $d\in\C$. Alors
$$
|cz+d|^2=|c|^2|z|^2+2\Re(c\bar d\,z)+|d|^2=|z|^2+2\Re(c\bar d\,z)+|d|^2 .
$$
L'égalité avec $1+|z|^2$ pour tout $z$ impose $|d|=1$ (en $z=0$) puis $\Re(c\bar d\,z)=0$ pour tout $z\in\C$, donc $c\bar d=0$ (prendre $z=\overline{c\bar d}$), ce qui contredit $|c|=|d|=1$. **Aucune** fonction entière ne convient. (Remarque : $1+|z|^2=|1|^2+|z|^2$ est une somme de deux carrés de modules, pas un seul.)

**4.** Soit $\Omega=D(0,1)\cup D(3,1)$ (réunion disjointe de deux disques, non connexe), $g=1$ sur $\Omega$, et $f=1$ sur $D(0,1)$, $f=-1$ sur $D(3,1)$. Ces fonctions sont holomorphes sur $\Omega$, $|f|=|g|=1$, mais $f=\lambda g$ imposerait $\lambda=1$ (sur $D(0,1)$) et $\lambda=-1$ (sur $D(3,1)$). Le prolongement analytique n'opère que sur une composante connexe à la fois.

## Pièges et variantes

* Dans la question 1, il ne suffit pas de dire « $|f/g|=1$ donc $f/g$ constante » sur tout $\Omega$ : $f/g$ n'est pas définie aux zéros de $g$. On travaille sur un disque où $g\ne0$, puis on **prolonge** l'égalité $f=\lambda g$, qui, elle, a un sens partout. Ne pas oublier le cas $g\equiv0$.
* Le principe du maximum demande un **maximum local de $|h|$** sur un **connexe** : un module constant est un cas particulier (chaque point est un maximum).
* $\frac{\partial\bar f}{\partial z}=0$ pour $f$ holomorphe, mais $\frac{\partial\bar f}{\partial\bar z}=\overline{f'}\ne0$ en général : c'est ce terme qui fait apparaître $|f'|^2$. C'est aussi la formule $\Delta|f|^2=4|f'|^2$ ([[ch01-laplacien-harmonique]]) : $|f|^2$ n'est jamais harmonique sauf si $f$ est constante.
* Variante : si $|f|+|g|$ est constante sur $\Omega$ connexe, $f$ et $g$ sont encore constantes (plus délicat : en un point $z_0$, choisir $|\mu|=1$ tel que $f(z_0)$ et $\mu g(z_0)$ aient même argument ; alors $|f+\mu g|\le|f|+|g|$ atteint son maximum en $z_0$, donc $f+\mu g$ est constante, puis exploiter le cas d'égalité de l'inégalité triangulaire).
* Variante : si $|f|^2+|g|^2=|z|^2+1$ sur $\C$, on peut montrer que $(f,g)$ s'obtient à partir de $(z,1)$ par une matrice unitaire $2\times2$ constante (c'est la version « à plusieurs fonctions » de la question 1).
