---
id: ch05-differentielle-seconde-def
type: definition
chapter: 5
title: Différentielle seconde $d^2f_a=d(df)_a$ vue comme application bilinéaire
ref: non numéroté, section V.5.3, p. 107
page: 107
importance: 2
depends: [ch05-differentielle-def, ch05-isometrie-bilineaire-curryfication, ch05-classe-ck-def, ch05-derivee-directionnelle-unicite]
tags: [differentielle-seconde, bilineaire, hessienne, definition]
---
## Intuition

> 💡 La différentielle $df_x$ dit comment $f$ varie au premier ordre près de $x$. La différentielle seconde dit comment **cette approximation linéaire elle-même** change quand on déplace le point $x$ : c'est la « dérivée de la dérivée ». En une variable, c'est $f''(a)$ ; pour $f:\R^n\to\R$, c'est la matrice hessienne.

Comme $df:U\to\mathcal L(E;F)$, sa différentielle en $a$ est une application linéaire de $E$ dans $\mathcal L(E;F)$ : à une direction de déplacement $u$, elle associe la variation $d(df)_a(u)\in\mathcal L(E;F)$ de la différentielle. Évaluée sur un second vecteur $v$, elle donne un vecteur de $F$. On obtient une fonction de **deux** vecteurs $(u,v)$, linéaire en chacun : une application **bilinéaire**. L'identification $\mathcal L(E;\mathcal L(E;F))\simeq\mathcal L(E,E;F)$ est l'isométrie de « curryfication » ([[ch05-isometrie-bilineaire-curryfication]]).

Rappels : $f$ de classe $C^1$ signifie $f$ différentiable sur $U$ et $df$ continue ([[ch05-differentielle-def]], [[ch05-classe-ck-def]]) ; $\mathcal L(E,E;F)$ est l'espace des applications bilinéaires continues $E\times E\to F$ ([[ch05-espace-multilineaires-norme]]).

## Énoncé

**Définition (poly, section V.5.3, p. 107, non numérotée).** Soit $f:U\to F$ une application de classe $C^1$ d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace vectoriel normé $F$. L'application
$$
df:U\to\mathcal L(E;F),\qquad x\mapsto df_x
$$
est partout définie sur $U$ et continue. Supposons qu'elle soit différentiable en un point $a\in U$. Sa différentielle en $a$ est alors un élément
$$
d^2f_a=d(df)_a\in\mathcal L(E;\mathcal L(E;F)),
$$
appelé **différentielle seconde** de $f$ en $a$ ; si $df$ est différentiable sur $U$, $x\mapsto d^2f_x$ va de $U$ dans $\mathcal L(E;\mathcal L(E;F))$. Grâce à l'isomorphisme naturel (isométrique) $\mathcal L(E;\mathcal L(E;F))\xrightarrow{\ \sim\ }\mathcal L(E,E;F)$ de la section V.1.4, la différentielle seconde $d^2f_a$ peut être vue comme une **application bilinéaire continue** de $E\times E$ dans $F$ :
$$
d^2f_a(u,v)=\big(d(df)_a(u)\big)(v)\qquad(u,v\in E).
$$
De même, la différentielle d'ordre $p$, $d^pf_a=d(d^{p-1}f)_a$, s'identifie à une application $p$-linéaire continue $E^p\to F$, avec $d^pf_a(h_1,\dots,h_p)=\big(d(d^{p-1}f)_a(h_1)\big)(h_2,\dots,h_p)$.

**Formule de calcul (conséquence immédiate).** Pour $u,v\in E$,
$$
d^2f_a(u,v)=\lim_{t\to0}\frac{df_{a+tu}(v)-df_a(v)}{t}.
$$
En effet, $d(df)_a(u)=\lim_{t\to0}\frac{df_{a+tu}-df_a}{t}$ dans $\mathcal L(E;F)$ (dérivée directionnelle de $df$, [[ch05-derivee-directionnelle-unicite]]), et l'évaluation $T\mapsto T(v)$ est linéaire continue de $\mathcal L(E;F)$ dans $F$ ($\|T(v)\|\le\|T\|\,\|v\|$), donc commute à la limite.

## Hypothèses

### H1 — $f$ de classe $C^1$ (au moins différentiable près de $a$)

**Rôle.** Pour parler de la différentiabilité de $df$ en $a$, il faut que $df$ soit définie sur un **voisinage** de $a$, donc que $f$ soit différentiable en tout point proche de $a$. Le poly suppose $f$ de classe $C^1$ sur l'ouvert $U$ ; la continuité de $df$ n'est pas indispensable pour définir $d^2f_a$ (elle découle d'ailleurs, **en $a$**, de la différentiabilité de $df$ en $a$).

### H2 — $df$ différentiable en $a$

**Rôle.** C'est la définition même de l'existence de $d^2f_a$. Elle est automatique si $f$ est de classe $C^2$. Attention : l'existence de toutes les dérivées partielles secondes en $a$ ne suffit pas (voir [[ch05-lemme-schwarz]], où l'on exhibe $f$ de classe $C^1$ dont les dérivées croisées existent en $0$ sans que $df$ y soit différentiable).

## Exemples

* **Le cas de $\R^n$ : la hessienne.** $E=\R^n$, $F=\R$, $f$ de classe $C^2$. Pour $v=\sum_jv_je_j$, $df_x(v)=\sum_j\frac{\partial f}{\partial x_j}(x)v_j$, donc, avec la formule de calcul,
$$
d^2f_a(u,v)=\sum_{j}v_j\lim_{t\to0}\frac{\frac{\partial f}{\partial x_j}(a+tu)-\frac{\partial f}{\partial x_j}(a)}{t}=\sum_{i,j}\frac{\partial}{\partial x_i}\Big(\frac{\partial f}{\partial x_j}\Big)(a)\,u_iv_j .
$$
Par exemple, pour $f(x,y)=x^2y$ : $\frac{\partial^2f}{\partial x^2}=2y$, $\frac{\partial^2 f}{\partial x\partial y}=\frac{\partial^2 f}{\partial y\partial x}=2x$, $\frac{\partial^2f}{\partial y^2}=0$, d'où $d^2f_{(a_1,a_2)}(u,v)=2a_2u_1v_1+2a_1(u_1v_2+u_2v_1)$.
* **Forme quadratique.** Si $b\in\mathcal L(E,E;\R)$ et $q(x)=b(x,x)$, alors $dq_x(v)=b(v,x)+b(x,v)$ ([[ch05-differentielle-bilineaire]]), et $dq_{a+tu}(v)-dq_a(v)=t\big(b(v,u)+b(u,v)\big)$. Donc $d^2q_a(u,v)=b(u,v)+b(v,u)$, indépendant de $a$. Pour $q(x)=\|x\|^2$ dans un Hilbert : $d^2q_a(u,v)=2\langle u,v\rangle$.
* **Carré matriciel.** $f(A)=A^2$ sur $\mathrm M_n(\R)$ : $df_A(V)=AV+VA$, et $df_{A+tU}(V)-df_A(V)=t(UV+VU)$, donc $d^2f_A(U,V)=UV+VU$.

## Pièges

* > ⚠️ **Ordre des variables.** Dans $d^2f_a(u,v)$, $u$ est la direction dans laquelle on dérive $df$, et $v$ le vecteur sur lequel on évalue $df_x$. Le lemme de Schwarz ([[ch05-lemme-schwarz]]) montre que l'ordre n'importe pas, mais c'est un théorème, pas la définition.
* $d^2f_a$ est un élément de $\mathcal L(E;\mathcal L(E;F))$ ; écrire $d^2f_a(u,v)$ suppose l'identification avec $\mathcal L(E,E;F)$, qui est une **isométrie** : $\|d^2f_a\|=\sup_{\|u\|,\|v\|\le1}\|d^2f_a(u,v)\|$.
* $d^2f_a(h,h)$ n'est pas « $df_a(h)^2$ » : pour $f:\R\to\R$, $d^2f_a(h,h)=f''(a)h^2$, alors que $df_a(h)^2=f'(a)^2h^2$.
* La donnée de $d^2f_a$ sur la diagonale ($h\mapsto d^2f_a(h,h)$) ne détermine $d^2f_a$ que parce qu'elle est symétrique (polarisation) : c'est le lemme de Schwarz qui le garantit.
