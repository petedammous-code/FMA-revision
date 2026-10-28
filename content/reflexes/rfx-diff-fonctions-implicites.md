---
id: rfx-diff-fonctions-implicites
type: reflexe
situation: Résoudre F(x,y)=0 en y=φ(x) près d'une solution connue, montrer qu'un objet (racine, valeur propre, solution d'équation) dépend régulièrement d'un paramètre
chapters: [6, 5, 7]
---
## Situation

On a une équation $F(x,y)=0$ (ou $F(\lambda,u)=0$) avec une **solution connue** $(x_0,y_0)$ — souvent triviale : $\lambda=0$, $u=0$ ; $\eps=0$ et une racine simple ; une matrice $A_0$ et une valeur propre simple. L'énoncé demande : « montrer que pour $x$ proche de $x_0$ il existe une unique solution $y=\varphi(x)$ proche de $y_0$ », « montrer que $\varphi$ est $C^\infty$ », « calculer $\varphi'(x_0)$ », « donner un développement limité de $\varphi$ à l'ordre $2$ », « montrer que les racines de $P_\eps$ dépendent continûment / $C^\infty$ de $\eps$ », « montrer que pour $\lambda$ petit, le problème admet une solution ». Mots-clés : *au voisinage de*, *pour $\eps$ assez petit*, *dépend de façon $C^1$ de*.

## Options

### [x] Théorème des fonctions implicites — [[ch06-fonctions-implicites]]
**Quand.** $F:U\times V\to G$ de classe $C^p$ ($p\ge1$) entre **Banach**, $F(x_0,y_0)=0$, et la différentielle partielle $\frac{\partial F}{\partial y}(x_0,y_0)$ est un **isomorphisme bicontinu** de l'espace des $y$ sur $G$. Conclusion : ouverts $U_0\ni x_0$, $V_0\ni y_0$ et $\varphi:U_0\to V_0$ de classe $C^p$ tels que, dans $U_0\times V_0$, $F(x,y)=0\iff y=\varphi(x)$ ; et $d\varphi_x=-\big(\frac{\partial F}{\partial y}(x,\varphi(x))\big)^{-1}\circ\frac{\partial F}{\partial x}(x,\varphi(x))$ (poly, Théorème VI.2.1, p. 118).
**Justification.** Dans le poly : point fixe de Banach à paramètre ([[ch06-point-fixe-parametre-cp]]) appliqué à $g(x,y)=y-\big(\frac{\partial F}{\partial y}(x_0,y_0)\big)^{-1}F(x,y)$, contractante en $y$ près de $(x_0,y_0)$ (l'inversion locale en est ensuite **déduite** ; la preuve classique inverse, via $(x,y)\mapsto(x,F(x,y))$, est équivalente).
**Pièges.** L'hypothèse se vérifie **au point** $(x_0,y_0)$, en dimension finie : $\partial_yF(x_0,y_0)\ne0$ (scalaire) ou $\det\ne0$. L'unicité est **locale** (dans $V_0$). Pour les **DL**, ne pas réutiliser la formule de $d\varphi$ indéfiniment : dériver l'identité $F(x,\varphi(x))=0$, ou injecter un développement $\varphi(x)=y_0+a(x-x_0)+b(x-x_0)^2+o$ et identifier.

### [x] Racine ou valeur propre **simple** d'un objet qui dépend d'un paramètre — [[ch06-valeurs-propres-simples-lisses]]
**Quand.** On veut la régularité d'une racine de $P_\eps$ ou d'une valeur propre de $A$ en fonction de $\eps$ ou de $A$. On applique les fonctions implicites à $(A,\lambda)\mapsto\chi_A(\lambda)=\det(\lambda I-A)$ (polynomiale donc $C^\infty$) : $\partial_\lambda\chi_{A_0}(\lambda_0)\ne0$ **exactement** quand $\lambda_0$ est racine **simple** (poly, Exercice VI.4.7, p. 124). Pour un vecteur propre, normaliser pour casser l'invariance par homothétie et résoudre **conjointement** en $(\lambda,v)\in\R\times\R^n$ : $G(A,\lambda,v)=\big(Av-\lambda v,\ \langle v,v_0\rangle-\langle v_0,v_0\rangle\big)=(0,0)$ ($n+1$ équations, $n+1$ inconnues). La différentielle partielle $(\mu,h)\mapsto\big((A_0-\lambda_0I)h-\mu v_0,\ \langle h,v_0\rangle\big)$ est injective donc bijective, car $v_0\notin\mathrm{Im}(A_0-\lambda_0I)$ quand $\lambda_0$ est racine simple. (Résoudre en $v$ seul, $\lambda(A)$ étant connu, envoie $\R^n$ dans $\R^n\times\R$ : jamais un isomorphisme.)
**Justification.** Racine simple ⇔ dérivée non nulle en la racine.
**Pièges.** Une valeur propre **double** n'est en général pas dérivable : $A_\eps=\begin{pmatrix}0&1\\\eps&0\end{pmatrix}$ a pour valeurs propres $\pm\sqrt\eps$ (non réelles si $\eps<0$). Sans normalisation, $(A-\lambda I)v=0$ a une différentielle partielle en $v$ **non injective** ($v_0$ dans le noyau) : les implicites ne s'appliquent pas telles quelles.

### [x] Point fixe à paramètre — [[ch06-point-fixe-parametre-cp]]
**Quand.** L'équation s'écrit (ou se réécrit) $y=g(\lambda,y)$ avec $g$ de classe $C^p$ sur $\Lambda\times X$, $X$ fermé convexe d'un Banach **stable** par $g(\lambda,\cdot)$, et $\big\|\frac{\partial g}{\partial y}\big\|\le a<1$ **uniformément**. Conclusion : pour **tout** $\lambda\in\Lambda$ (pas seulement près de $\lambda_0$) une unique solution $\varphi(\lambda)\in X$, et $\varphi\in C^p$ (poly, Théorème VI.1.4, p. 117).
**Justification.** Banach donne existence/unicité ; la régularité vient de l'inversibilité de $\mathrm{Id}-\partial_yg$ (Neumann).
**Pièges.** Il faut la stabilité $g(\lambda,X)\subset X$ et la constante $a$ indépendante de $\lambda$. Avantage sur les implicites : domaine **explicite** et unicité **globale** dans $X$.

### [ ] Cauchy–Lipschitz à paramètres — [[ch07-cauchy-lipschitz-parametres]]
**Pourquoi ce n'est pas l'outil ici.** Pour un problème **aux limites** ($u''=\lambda f(u)$, $u(0)=u(1)=0$), la donnée n'est pas une condition initiale : Cauchy–Lipschitz ne dit rien directement.
**Quand il le serait.** Problème de **Cauchy** dépendant d'un paramètre. Ou en combinaison (méthode de tir) : on note $u(t;\lambda,s)$ la solution de condition initiale $u(0)=0$, $u'(0)=s$, régulière en $(\lambda,s)$ par Cauchy–Lipschitz à paramètres, puis on résout $u(1;\lambda,s)=0$ en $s$ par les **fonctions implicites**.

### [ ] Submersion ouverte (différentielle seulement surjective) — [[ch06-submersion-ouverte]]
**Pourquoi ce n'est pas l'outil ici.** Si $\partial_yF(x_0,y_0)$ est un isomorphisme, les implicites donnent existence, **unicité locale** et régularité ; la submersion ne donne que l'**existence** (une solution parmi d'autres, sans dépendance régulière).
**Quand il le serait.** Plus d'inconnues que d'équations : $\partial_yF$ **surjective non injective**, avec un noyau admettant un supplémentaire fermé (ex. : $f'+tf^2=g$ résoluble pour $g$ petite, [[ch06-edo-non-lineaire-surjectivite]]). On peut aussi restreindre $y$ à un supplémentaire du noyau pour retrouver un isomorphisme.

## Démarche

1. **Mettre l'équation sous la forme** $F(x,y)=0$ en séparant **paramètre** $x$ et **inconnue** $y$ ; identifier la solution de référence $(x_0,y_0)$.
2. **Choisir les espaces** : dimension finie, ou Banach de fonctions (inconnue $u\in E=\{u\in C^2([0,1]),\ u(0)=u(1)=0\}$, but $G=C^0([0,1])$ par exemple) ; vérifier $F\in C^p$ ([[rfx-diff-differentiabilite]]).
3. **Calculer $\frac{\partial F}{\partial y}(x_0,y_0)$** et montrer que c'est un isomorphisme bicontinu (scalaire non nul ; déterminant non nul ; en dimension infinie : résoudre explicitement l'équation linéaire, voir [[rfx-diff-isomorphisme-bicontinu]]).
4. Si oui alors fonctions implicites : énoncer avec $U_0$, $V_0$, $\varphi$ et préciser la classe. Si $\partial_yF$ est seulement surjective alors submersion ou restriction à un supplémentaire. Si l'équation est de la forme $y=g(x,y)$ avec $g$ contractante en $y$ alors point fixe à paramètre (meilleur domaine).
5. **Calculs** : $\varphi'(x_0)=-\partial_yF^{-1}\,\partial_xF$ au point ; pour l'ordre $2$, développer.
6. **Unicité** : rappeler qu'elle n'a lieu que dans $V_0$ (et pour les branches continues si $U_0$ est connexe).

## Pièges

* Vérifier la non-dégénérescence en un **autre** point que $(x_0,y_0)$, ou oublier de la vérifier.
* Oublier de prouver que la solution de référence en est bien une ($F(x_0,y_0)=0$).
* Inverser les rôles : les implicites résolvent en la variable dont la partielle est **inversible**.
* Valeur propre multiple : pas de dépendance régulière en général.
* En dimension infinie : $\partial_yF(x_0,y_0)$ injective n'est pas un isomorphisme ; il faut la surjectivité et la continuité de l'inverse.

## Mini-exemple

*Énoncé.* Montrer que pour $t$ proche de $0$, l'équation $x\,e^{tx}=1+t$ a une unique solution $x=\varphi(t)$ proche de $1$, avec $\varphi$ de classe $C^\infty$, et donner $\varphi$ à l'ordre $2$.

*Solution.* $F(t,x)=xe^{tx}-1-t$ est $C^\infty$ sur $\R^2$, $F(0,1)=0$, $\partial_xF(t,x)=e^{tx}(1+tx)$ vaut $1\ne0$ en $(0,1)$ : les fonctions implicites [[ch06-fonctions-implicites]] donnent $\varphi$, $C^\infty$, avec $\varphi(0)=1$. $\partial_tF=x^2e^{tx}-1$ vaut $0$ en $(0,1)$, donc $\varphi'(0)=0$. Ordre $2$ : $\varphi(t)=1+bt^2+o(t^2)$ ; $xe^{tx}=x+tx^2+\frac{t^2x^3}2+O(t^3)=1+t+(b+\tfrac12)t^2+o(t^2)$, à égaler à $1+t$ : $b=-\tfrac12$. Donc $\varphi(t)=1-\frac{t^2}2+o(t^2)$ (numériquement, $\varphi(0{,}01)\approx0{,}99995$).
