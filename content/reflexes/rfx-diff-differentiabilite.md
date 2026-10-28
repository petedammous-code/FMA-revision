---
id: rfx-diff-differentiabilite
type: reflexe
situation: Montrer qu'une application (entre espaces de matrices ou de fonctions) est différentiable, de classe C^1 ou C^k, et calculer sa différentielle
chapters: [5, 6, 8]
---
## Situation

On a une application $\Phi : U\subset E\to F$ entre espaces vectoriels normés, souvent **de dimension infinie** : $E=\mathrm M_n(\R)$, $C^0([0,1])$ muni de $\|\cdot\|_\infty$, $C^1([0,1];V)$ muni de $\|u\|_\infty+\|u'\|_\infty$, $\ell^1$... Exemples typiques : $\Phi(A)=A^3$, $\Phi(A)=A^{-1}$, $\Phi(A)=\det A$, $\Phi(u)=\int_0^1 g(t,u(t))\,dt$, $\Phi(u)=u'+t\,u^2$, $\Phi(\gamma)=\int_0^1L(t,\gamma,\gamma')\,dt$. L'énoncé dit « montrer que $\Phi$ est de classe $C^1$ (ou $C^\infty$) et calculer $d\Phi_u(h)$ ». C'est presque toujours la **question 1** d'un exercice de calcul différentiel : elle conditionne ensuite l'usage de l'inversion locale, des fonctions implicites ou d'Euler–Lagrange.

## Options

### [x] Briques connues + règle de la chaîne — [[ch05-composition-differentielles]]
**Quand.** $\Phi$ s'écrit comme somme, composée ou « produit » de briques dont on connaît la différentielle : applications **linéaires continues** ($df_a=f$, [[ch05-differentielle-lineaire]] : trace, transposition, $u\mapsto u(t_0)$, $u\mapsto\int_0^1u$, $u\mapsto u'$ de $C^1$ dans $C^0$), **bilinéaires continues** ($db_{(a,b)}(h,k)=b(a,k)+b(h,b)$, [[ch05-differentielle-bilineaire]] : produit matriciel, produit de fonctions dans $C^0$, produit scalaire), **inversion** $A\mapsto A^{-1}$ ($d\Psi_A(H)=-A^{-1}HA^{-1}$, [[ch05-inversion-c-infini]]), fonctions **polynomiales en les coefficients** en dimension finie ($\det$).
**Justification.** Règle de la chaîne $d(g\circ f)_a=dg_{f(a)}\circ df_a$ (poly, Proposition V.3.12, p. 100) et formule de Leibniz $d\big(b(f_1,f_2)\big)_a(h)=b\big((df_1)_a h,f_2(a)\big)+b\big(f_1(a),(df_2)_ah\big)$ ([[ch05-formule-leibniz]]). Les briques linéaires/bilinéaires continues et l'inversion sont $C^\infty$, donc une composée de briques $C^\infty$ est $C^\infty$ sans autre calcul.
**Pièges.** La **continuité** d'une brique linéaire dépend des normes : $u\mapsto u'$ est continue de $(C^1,\|u\|_\infty+\|u'\|_\infty)$ dans $(C^0,\|\cdot\|_\infty)$, pas de $C^1$ muni de $\|\cdot\|_\infty$. Respecter l'**ordre** des produits non commutatifs : $d(A\mapsto A^2)_A(H)=AH+HA$, pas $2AH$ ; $d(A\mapsto A^n)_A(H)=\sum_{k=0}^{n-1}A^kHA^{n-1-k}$.

### [x] Revenir à la définition : deviner $L$, puis majorer le reste — [[ch05-differentielle-def]]
**Quand.** Une brique n'est pas dans la liste : typiquement un **opérateur de composition** $u\mapsto g\circ u$ ou $u\mapsto\int_0^1g(t,u(t))\,dt$ sur $C^0([0,1])$, ou $(x_i)\mapsto(g(x_i))$ sur $\ell^1$. Méthode en trois temps : (1) calculer la dérivée directionnelle $\frac{d}{ds}\Phi(u+sh)|_{s=0}$ pour **deviner** $L=d\Phi_u$ ([[ch05-derivee-directionnelle-unicite]]) ; (2) vérifier que $L$ est **linéaire continue** ($\|Lh\|\le C\|h\|$) ; (3) montrer $\|\Phi(u+h)-\Phi(u)-Lh\|=o(\|h\|)$.
**Justification.** C'est la définition même (poly, Définition V.3.1, p. 98). Pour l'étape (3), écrire le reste ponctuel avec Taylor en une variable : $g(x+y)-g(x)-g'(x)y=y\int_0^1\big(g'(x+sy)-g'(x)\big)ds$, puis utiliser la **continuité uniforme** de $g'$ sur un compact $[-R,R]$ contenant les valeurs de $u$ et $u+h$ (Heine) : le reste est $\le\omega(\|h\|_\infty)\|h\|_\infty$ avec $\omega(\delta)\to0$.
**Pièges.** Le $o(\|h\|)$ doit être **uniforme en $t$** : une majoration ponctuelle « pour chaque $t$ » ne suffit pas. En dimension infinie, la continuité de $L$ n'est pas automatique : l'écrire. Sur $\ell^1$, il faut aussi vérifier que $\Phi$ est **bien définie** (il faut $g(0)=0$ pour que $(g(x_i))\in\ell^1$).

### [x] Classe $C^k$ par récurrence : exprimer $d\Phi$ avec des briques — [[ch05-classe-ck-def]]
**Quand.** On veut $C^1$, $C^2$, ou $C^\infty$, et l'on a obtenu une formule pour $d\Phi_u$. Écrire $u\mapsto d\Phi_u$ comme composée d'une application dont on connaît la régularité et d'une application linéaire continue (souvent isométrique) à valeurs dans $\mathcal L(E;F)$.
**Justification.** $C^1$ = différentiable **et** $u\mapsto d\Phi_u\in\mathcal L(E;F)$ continue pour la **norme d'opérateur**. Exemple : pour $\Phi(u)=g\circ u$ sur $C^0$, $d\Phi_u=M_{g'\circ u}$ (multiplication par $g'\circ u$) ; $w\mapsto M_w$ est linéaire isométrique de $C^0$ dans $\mathcal L(C^0)$, donc $d\Phi=M\circ N_{g'}$ avec $N_{g'}(u)=g'\circ u$ : si $g\in C^{k}$, récurrence sur $k$ ⇒ $\Phi\in C^k$.
**Pièges.** La continuité de $d\Phi$ se teste en norme d'opérateur : majorer $\sup_{\|h\|\le1}\|d\Phi_u(h)-d\Phi_v(h)\|$, pas seulement $\|d\Phi_u(h)-d\Phi_v(h)\|\to0$ pour chaque $h$ fixé.

### [x] Dérivées partielles continues — [[ch05-c1-ssi-partielles-continues]]
**Quand.** La source est un **produit** $E_1\times\cdots\times E_m$ (en particulier $\R^n$, ou $\R\times C^0$ quand il y a un paramètre $\lambda$) et chaque dérivée partielle est facile à calculer.
**Justification.** (poly, Proposition V.5.1, p. 106) : $f$ est $C^1$ si et seulement si ses dérivées partielles existent et sont **continues** ; alors $df_a(h_1,\dots,h_m)=\sum_i\frac{\partial f}{\partial x_i}(a)(h_i)$ ([[ch05-differentielles-partielles]]).
**Pièges.** Il faut la continuité des partielles sur un **voisinage**, pas seulement leur existence au point.

### [ ] Dérivées directionnelles linéaires en $h$ (« Gâteaux ») suffisent — [[ch05-derivee-directionnelle-unicite]]
**Pourquoi ce n'est pas l'outil ici.** Que $\lim_{s\to0}\frac{\Phi(a+sh)-\Phi(a)}s$ existe pour tout $h$ et soit linéaire en $h$ ne prouve **pas** la différentiabilité. Contre-exemple : $f(x,y)=\frac{x^2y}{x^4+y^2}$, $f(0,0)=0$ : toutes les dérivées directionnelles en $0$ sont nulles ($f(sh,sk)/s=\frac{sh^2k}{s^2h^4+k^2}\to0$), mais $f(x,x^2)=\tfrac12$, donc $f$ n'est même pas continue en $0$.
**Quand il le serait.** Pour **deviner** le candidat $L$ (étape 1 de la méthode par définition), ou pour **calculer** $df_a(h)$ une fois la différentiabilité acquise.

### [ ] Existence des dérivées partielles en un point — [[ch05-partielles-sans-differentiabilite]]
**Pourquoi ce n'est pas l'outil ici.** L'existence des $\frac{\partial f}{\partial x_i}(a)$ n'implique pas la différentiabilité en $a$ : $f(x,y)=\frac{xy}{x^2+y^2}$, $f(0,0)=0$, a ses deux partielles nulles en $0$ mais vaut $\tfrac12$ sur la diagonale.
**Quand il le serait.** Combinée à la **continuité** des partielles au voisinage : c'est alors l'option précédente.

## Démarche

1. **Bien poser le cadre** : écrire les normes de $E$ et $F$, l'ouvert $U$, et vérifier que $\Phi$ est **bien définie** ($\Phi(u)\in F$).
2. Si $\Phi$ est une composée/produit de briques (linéaire, bilinéaire, inversion, polynôme) alors règle de la chaîne + Leibniz : la différentielle se lit, la régularité $C^\infty$ suit.
3. Sinon, calculer $\frac{d}{ds}\Phi(u+sh)|_{s=0}$ pour deviner $L$ ; montrer $L\in\mathcal L(E;F)$ ; majorer le reste par Taylor 1D + continuité uniforme sur un compact.
4. Pour $C^1$ : majorer $\|d\Phi_u-d\Phi_v\|_{\mathcal L(E;F)}$. Pour $C^k$ : écrire $d\Phi$ comme composée de briques et faire une récurrence.
5. Si la source est un produit (paramètre $\times$ inconnue), traiter chaque variable séparément et conclure par la Proposition V.5.1.
6. En dimension finie, si $\Phi$ est polynomiale (ou rationnelle) en les coefficients, la régularité $C^\infty$ est immédiate ; il reste à **calculer** $d\Phi$, au plus vite par $\frac{d}{ds}\Phi(A+sH)|_{s=0}$ (ex. : $d\det_A(H)=\mathrm{tr}({}^t\mathrm{com}(A)\,H)$, et $=\det A\cdot\mathrm{tr}(A^{-1}H)$ si $A$ inversible).

## Pièges

* Oublier de vérifier que $L$ est **continue** (en dimension infinie) ou que $\Phi$ est **bien définie**.
* Commuter des matrices : $d(A\mapsto A^{-1})_A(H)=-A^{-1}HA^{-1}$ et non $-A^{-2}H$.
* Choisir une norme qui rend une brique discontinue (dérivation pour la norme $\|\cdot\|_\infty$ sur $C^1$), ou qui rend l'espace non complet : les théorèmes suivants (inversion locale, implicites) exigent des **Banach**.
* Confondre « $d\Phi_u(h)\to d\Phi_v(h)$ pour tout $h$ » et continuité de $d\Phi$ en norme d'opérateur.
* Écrire $o(h)$ ponctuellement en $t$ au lieu d'un $o(\|h\|_\infty)$ uniforme.

## Mini-exemple

*Énoncé.* Sur $E=C^0([0,1])$ muni de $\|\cdot\|_\infty$, $\Phi(u)=\int_0^1e^{u(t)}dt$. Montrer que $\Phi$ est $C^1$ et calculer $d\Phi_u$.

*Solution.* Dérivée directionnelle : $\frac{d}{ds}\int_0^1e^{u+sh}\big|_{s=0}=\int_0^1e^{u}h$ ; on pose $L_u(h)=\int_0^1e^{u(t)}h(t)\,dt$, linéaire et $|L_u(h)|\le e^{\|u\|_\infty}\|h\|_\infty$, donc continue. Reste : $e^{u+h}-e^u-e^uh=e^u(e^h-1-h)$ et, par Taylor–Lagrange, $|e^y-1-y|\le\frac{y^2}2e^{|y|}$. D'où
$$\big|\Phi(u+h)-\Phi(u)-L_u(h)\big|\le e^{\|u\|_\infty}e^{\|h\|_\infty}\frac{\|h\|_\infty^2}2=o(\|h\|_\infty).$$
Donc $d\Phi_u=L_u$. Enfin $\|d\Phi_u-d\Phi_v\|_{\mathcal L(E;\R)}\le\int_0^1|e^u-e^v|\le e^{\max(\|u\|_\infty,\|v\|_\infty)}\|u-v\|_\infty$ (accroissements finis pour $\exp$), donc $u\mapsto d\Phi_u$ est continue : $\Phi$ est $C^1$.
